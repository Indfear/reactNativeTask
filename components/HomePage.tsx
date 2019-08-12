import React from "react";
import {
  Text,
  View,
  Button,
  ScrollView,
  ActivityIndicator
} from "react-native";
import { SearchBar, ListItem, Icon, Divider } from "react-native-elements";
import { Repository } from "../types/Repository";
import { AppState } from "../store/configureStore";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../types/actions";
import { bindActionCreators } from "redux";
import { startSearchRepositories } from "../actions/repositories";
import { connect } from "react-redux";
import { NavigationScreenProp } from "react-navigation";

interface HomePageProps {
  navigation: NavigationScreenProp<any, any>;
}

interface HomePageState {
  searchTerm: string;
}

type Props = HomePageProps & LinkDispatchProps & LinkStateProp;

export class HomePage extends React.Component<Props, HomePageState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  updateSearch = (searchTerm: string) => {
    this.setState({
      searchTerm: searchTerm
    });
  };

  searchRepositories = () => {
    this.props.startSearchRepositories(this.state.searchTerm);
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <View>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={searchTerm}
          returnKeyType="search"
          onSubmitEditing={this.searchRepositories}
        />
        {!this.props.repositoriesLoading ? (
          <ScrollView>
            {this.props.repositories.map((repository, key) => (
              <View key={key}>
                <ListItem
                  onPress={() =>
                    this.props.navigation.navigate("RepositoryDetails", {
                      repositoryId: repository.id
                    })
                  }
                  leftAvatar={{ source: { uri: repository.owner.avatar_url } }}
                  title={repository.name}
                  subtitle={
                    <View>
                      <Text>{repository.description}</Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between"
                        }}
                      >
                        <Icon name="star" type="feather" color="#517fa4" />
                        <Text>{repository.watchers}</Text>
                        <Icon
                          name="git-branch"
                          type="feather"
                          color="#517fa4"
                        />
                        <Text>{repository.forks}</Text>
                        <Icon name="user" type="feather" color="#517fa4" />
                        <Text>{repository.owner.login}</Text>
                      </View>
                    </View>
                  }
                />
                <Divider style={{ backgroundColor: "blue" }} />
              </View>
            ))}
          </ScrollView>
        ) : (
          <ActivityIndicator
            style={{ margin: 10 }}
            size="large"
            color="#517fa4"
          />
        )}
      </View>
    );
  }
}

interface LinkStateProp {
  repositoriesLoading: boolean;
  repositories: Repository[];
  error: any;
}

interface LinkDispatchProps {
  startSearchRepositories: (searchTerm: string) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: HomePageProps
): LinkStateProp => ({
  repositoriesLoading: state.repositories.loading,
  repositories: state.repositories.repositories,
  error: state.repositories.error
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: HomePageProps
): LinkDispatchProps => ({
  startSearchRepositories: bindActionCreators(startSearchRepositories, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

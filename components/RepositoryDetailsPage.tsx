import React from "react";
import { Text, View, Button, ScrollView, Image } from "react-native";
import { SearchBar, ListItem, Icon } from "react-native-elements";
import { Repository } from "../types/Repository";
import { AppState } from "../store/configureStore";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../types/actions";
import { bindActionCreators } from "redux";
import { startSearchRepositories } from "../actions/repositories";
import { connect } from "react-redux";
import { NavigationScreenProp } from "react-navigation";
import { styles } from "../styles/style";
import { format } from "date-fns";

interface RepositoryDetailsPageProps {
  navigation: NavigationScreenProp<any, any>;
}

interface RepositoryDetailsPageState {}

type Props = RepositoryDetailsPageProps & LinkDispatchProps & LinkStateProp;

export class RepositoryDetailsPage extends React.Component<
  Props,
  RepositoryDetailsPageState
> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const repositoryId = this.props.navigation.getParam("repositoryId");
    const repository = this.props.repositories.find(r => r.id === repositoryId);
    return (
      <ScrollView>
        <View style={styles.flexColumnNormal}>
          <View style={[styles.container1, styles.headerNavigation]}>
            <View
              style={[styles.basicContainerWithoutBorder, styles.textWithIcon]}
            >
              <Icon
                onPress={() => this.props.navigation.goBack()}
                iconStyle={{ margin: 5, fontSize: 40 }}
                name="arrow-left"
                type="feather"
                color="#517fa4"
              />
            </View>
            <View
              style={[
                styles.basicContainerWithoutBorder,
                styles.textWithIconReverse
              ]}
            >
              <Icon
                iconStyle={{ margin: 5, fontSize: 40 }}
                name="share"
                type="feather"
                color="#517fa4"
              />
            </View>
          </View>
          <View style={styles.headerView}>
            <View style={styles.textContainer}>
              <Image
                style={styles.repositoryImage}
                source={{ uri: repository.owner.avatar_url }}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.basicText, styles.title]}>
                {repository.name}
              </Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.basicText, styles.subtitle]}>
                {repository.description}
              </Text>
            </View>
          </View>
          <View style={styles.contentView}>
            <View style={[styles.container1, styles.marginBottom]}>
              <View style={styles.basicContainer}>
                <Text style={styles.textCentered}>
                  {repository.stargazers_count}
                </Text>
                <Text style={styles.textCentered}>Stargazers</Text>
              </View>
              <View style={styles.basicContainer}>
                <Text style={styles.textCentered}>{repository.watchers}</Text>
                <Text style={styles.textCentered}>Watchers</Text>
              </View>
              <View style={styles.basicContainer}>
                <Text style={styles.textCentered}>{repository.forks}</Text>
                <Text style={styles.textCentered}>Forks</Text>
              </View>
            </View>

            <View style={styles.container1}>
              <View style={[styles.basicContainer, styles.textWithIcon]}>
                <Icon name="lock" type="feather" color="#517fa4" />
                <Text style={{ margin: 5 }}>
                  {repository.private ? "Private" : "Public"}
                </Text>
              </View>
              <View style={[styles.basicContainer, styles.textWithIcon]}>
                <Icon name="box" type="feather" color="#517fa4" />
                <Text style={{ margin: 5 }}>{repository.language}</Text>
              </View>
            </View>

            <View style={styles.container1}>
              <View style={[styles.basicContainer, styles.textWithIcon]}>
                <Icon name="alert-circle" type="feather" color="#517fa4" />
                <Text style={{ margin: 5 }}>
                  {repository.open_issues} Issues
                </Text>
              </View>
              <View style={[styles.basicContainer, styles.textWithIcon]}>
                <Icon name="git-branch" type="feather" color="#517fa4" />
                <Text style={{ margin: 5 }}>{repository.forks} Forks</Text>
              </View>
            </View>

            <View style={styles.container1}>
              <View style={[styles.basicContainer, styles.textWithIcon]}>
                <Icon name="calendar" type="feather" color="#517fa4" />
                <Text style={{ margin: 5 }}>
                  {format(repository.created_at, "DD.MM.YYYY")}
                </Text>
              </View>
              <View style={[styles.basicContainer, styles.textWithIcon]}>
                <Icon name="database" type="feather" color="#517fa4" />
                <Text style={{ margin: 5 }}>{repository.size / 1000} MB</Text>
              </View>
            </View>

            <View
              style={[
                styles.container1,
                styles.basicContainer,
                styles.marginBottom
              ]}
            >
              <View
                style={[
                  styles.basicContainerWithoutBorder,
                  styles.textWithIcon
                ]}
              >
                <Icon name="user" type="feather" color="#517fa4" />
                <Text style={{ margin: 5 }}>Owner</Text>
              </View>
              <View
                style={[
                  styles.basicContainerWithoutBorder,
                  styles.textWithIconReverse
                ]}
              >
                <Text style={{ margin: 5 }}>{repository.owner.login}</Text>
                <Icon
                  iconStyle={{ margin: 5 }}
                  name="chevron-right"
                  type="feather"
                  color="#517fa4"
                />
              </View>
            </View>

            <View style={[styles.container1, styles.basicContainer]}>
              <View
                style={[
                  styles.basicContainerWithoutBorder,
                  styles.textWithIcon
                ]}
              >
                <Icon name="wifi" type="feather" color="#517fa4" />
                <Text style={{ margin: 5 }}>Events</Text>
              </View>
              <View
                style={[
                  styles.basicContainerWithoutBorder,
                  styles.textWithIconReverse
                ]}
              >
                <Icon
                  iconStyle={{ margin: 5 }}
                  name="chevron-right"
                  type="feather"
                  color="#517fa4"
                />
              </View>
            </View>

            <View style={[styles.container1, styles.basicContainer]}>
              <View
                style={[
                  styles.basicContainerWithoutBorder,
                  styles.textWithIcon
                ]}
              >
                <Icon name="alert-circle" type="feather" color="#517fa4" />
                <Text style={{ margin: 5 }}>Issues</Text>
              </View>
              <View
                style={[
                  styles.basicContainerWithoutBorder,
                  styles.textWithIconReverse
                ]}
              >
                <Icon
                  iconStyle={{ margin: 5 }}
                  name="chevron-right"
                  type="feather"
                  color="#517fa4"
                />
              </View>
            </View>

            <View
              style={[
                styles.container1,
                styles.basicContainer,
                styles.marginBottom
              ]}
            >
              <View
                style={[
                  styles.basicContainerWithoutBorder,
                  styles.textWithIcon
                ]}
              >
                <Icon name="book-open" type="feather" color="#517fa4" />
                <Text style={{ margin: 5 }}>Readme</Text>
              </View>
              <View
                style={[
                  styles.basicContainerWithoutBorder,
                  styles.textWithIconReverse
                ]}
              >
                <Icon
                  iconStyle={{ margin: 5 }}
                  name="chevron-right"
                  type="feather"
                  color="#517fa4"
                />
              </View>
            </View>

            <View style={[styles.container1, styles.basicContainer]}>
              <View
                style={[
                  styles.basicContainerWithoutBorder,
                  styles.textWithIcon
                ]}
              >
                <Icon name="git-commit" type="feather" color="#517fa4" />
                <Text style={{ margin: 5 }}>Commits</Text>
              </View>
              <View
                style={[
                  styles.basicContainerWithoutBorder,
                  styles.textWithIconReverse
                ]}
              >
                <Icon
                  iconStyle={{ margin: 5 }}
                  name="chevron-right"
                  type="feather"
                  color="#517fa4"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

interface LinkStateProp {
  repositoriesLoading: boolean;
  repositories: Repository[];
  error: any;
}

interface LinkDispatchProps {}

const mapStateToProps = (
  state: AppState,
  ownProps: RepositoryDetailsPageProps
): LinkStateProp => ({
  repositoriesLoading: state.repositories.loading,
  repositories: state.repositories.repositories,
  error: state.repositories.error
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: RepositoryDetailsPageProps
): LinkDispatchProps => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoryDetailsPage);

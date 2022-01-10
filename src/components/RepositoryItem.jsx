import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import theme from '../theme';

const cardHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    padding: 5,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  infoContainer: {
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.fontSizes.heading,
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.textSecondary,
    fontWeight: 'bold',
  },
});

const languageStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 0,
    padding: 5,
  },
  infoContainer: {
    flexGrow: 0,
    paddingLeft: 60,
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    fontSize: theme.fontSizes.body,
    fontWeight: 'bold',
    padding: 5,
    borderRadius: 5,
  },
});

const cardFooterStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 60,
  },
  section: {
    flexDirection: 'column',
    flexGrow: 1,
    padding: 10,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.textSecondary,
    fontWeight: 'bold',
    padding: 5,
  },
  info: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: 'bold',
    padding: 5,
  },
});

const CardHeader = ({ item }) => {
  return (
    <View style={cardHeaderStyles.container}>
      <View style={cardHeaderStyles.avatarContainer}>
        <Image
          style={cardHeaderStyles.avatar}
          source={{ uri: item?.ownerAvatarUrl }}
        />
      </View>
      <View style={cardHeaderStyles.infoContainer}>
        <Text testID="repoName" style={cardHeaderStyles.heading}>
          {item.id}
        </Text>
        <Text testID="repoDescription" style={cardHeaderStyles.subheading}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

const RepositoryLanguage = ({ item }) => {
  return (
    <View style={languageStyles.container}>
      <View style={languageStyles.infoContainer}>
        <Text testID="repoLanguage" style={languageStyles.language}>
          {item.language}
        </Text>
      </View>
    </View>
  );
};

const CardFooter = ({ item }) => {
  const summaryValue = (value) => {
    let formatter = Intl.NumberFormat('en', { notation: 'compact' });

    if (value >= 1000) {
      return formatter.format(value);
    }

    return value;
  };

  return (
    <View style={cardFooterStyles.container}>
      <View style={cardFooterStyles.section}>
        <Text testID="repoStargazersCount" style={cardFooterStyles.subheading}>
          {summaryValue(item.stargazersCount)}
        </Text>
        <Text style={cardFooterStyles.subheading}>Stars</Text>
      </View>
      <View style={cardFooterStyles.section}>
        <Text testID="repoForksCount" style={cardFooterStyles.subheading}>
          {summaryValue(item.forksCount)}
        </Text>
        <Text style={cardFooterStyles.subheading}>Forks</Text>
      </View>
      <View style={cardFooterStyles.section}>
        <Text testID="repoReviewCount" style={cardFooterStyles.subheading}>
          {item.reviewCount}
        </Text>
        <Text style={cardFooterStyles.subheading}>Reviews</Text>
      </View>
      <View style={cardFooterStyles.section}>
        <Text testID="repoRatingAverage" style={cardFooterStyles.subheading}>
          {item.ratingAverage}
        </Text>
        <Text style={cardFooterStyles.subheading}>Ratings</Text>
      </View>
    </View>
  );
};

const RepositoryItem = ({ item }) => {
  return (
    <View testID="repoItem">
      <CardHeader item={item}></CardHeader>
      <RepositoryLanguage item={item}></RepositoryLanguage>
      <CardFooter item={item}></CardFooter>
    </View>
  );
};

export default RepositoryItem;

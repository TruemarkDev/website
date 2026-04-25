export const removeObjectIfMatches = (
  fetchedObjectArr,
  objectToBeMergedArr,
  commonAttribute,
) => {
  const fetchedArray = [...fetchedObjectArr];
  const toBeMergedArray = [...objectToBeMergedArr];

  // listing all the attributes name to be deleted
  const toBeDeleted = fetchedArray.map((common) => common[commonAttribute]);

  // creating a set of common attributes
  const toDelete = new Set([...toBeDeleted]);

  // returns the array after deleting objects with common attributes
  const newArray = toBeMergedArray.filter(
    (obj) => !toDelete.has(obj[commonAttribute]),
  );

  // merging above array with fetched array
  const mergedArray = [...newArray, ...fetchedArray];

  return mergedArray;
};

const mergeProfile = ({ fetchedObject, exisitingObject }) => {
  const newObj = {
    basics: {
      ...fetchedObject.basics,
      ...exisitingObject.basics,
      location: {
        ...exisitingObject.basics.location,
        ...fetchedObject.basics.location,
      },
      profiles: removeObjectIfMatches(
        fetchedObject.basics.profiles,
        exisitingObject.basics.profiles,
        'network', // common attribute to delete
      ),
    },

    clientFeedbacks: [...exisitingObject.clientFeedbacks],
    otherExperiences: [...exisitingObject.otherExperiences],
    skills: removeObjectIfMatches(
      fetchedObject.skills,
      exisitingObject.skills,
      'name',
    ),
    work: removeObjectIfMatches(
      fetchedObject.work,
      exisitingObject.work,
      'name',
    ),
    volunteer: removeObjectIfMatches(
      fetchedObject.volunteer,
      exisitingObject.volunteer,
      'organization',
    ),
    awards: removeObjectIfMatches(
      fetchedObject.awards,
      exisitingObject.awards,
      'title',
    ),
    projects: [
      ...exisitingObject.projects, // we are not merging this right now
    ],
    meta: {
      ...exisitingObject.meta,
      ...fetchedObject.meta,
    },
    tools: [...exisitingObject.tools],
    education: removeObjectIfMatches(
      fetchedObject.education,
      exisitingObject.education,
      'institution',
    ),
    languages: removeObjectIfMatches(
      fetchedObject.languages,
      exisitingObject.languages,
      'language',
    ),
    interests: removeObjectIfMatches(
      fetchedObject.interests,
      exisitingObject.interests,
      'name',
    ),
    references: removeObjectIfMatches(
      fetchedObject.references,
      exisitingObject.references,
      'name',
    ),
    publications: removeObjectIfMatches(
      fetchedObject.publications,
      exisitingObject.publications,
      'name',
    ),
  };
  return { ...fetchedObject, ...newObj };
};

export default mergeProfile;

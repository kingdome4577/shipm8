//this will be our landing page we can use this to work with the MVP data we are trying to get
import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Badge } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
// import RegionsList from '../RegionsList'

mapStateToProps = state => ({
  totalCluster: state.app.totalCluster,
  clusterName: state.app.clusterName,
  pods: state.app.totalPods,
  region: state.app.regions
});

// where <Badge> is created we need to determine the error cases for clusters
// so we can determine the status of the cluster and perhaps real time updates
const Main = props => {
  const regionsList = {
    'US East (N. Virginia)': 'us-east-1',
    'US East(Ohio)': 'us-east-2',
    'US West(N.California)': 'us-west-1',
    'US West(Oregon)': 'us-west-2',
    'Asia Pacific(Hong Kong)': 'ap-east-1',
    'Asia Pacific(Mumbai)': 'ap-south-1',
    'Asia Pacific(Seoul)': 'ap-northeast-2',
    'Asia Pacific(Singapore)': 'ap-southeast-1',
    'Asia Pacific(Sydney)': 'ap-southeast-2',
    'Asia Pacific(Tokyo)': 'ap-northeast-1',
    'Canada(Central)': 'ca-central-1',
    'Europe(Frankfurt)': 'eu-central-1',
    'Europe(Ireland)': 'eu-west-1',
    'Europe(London)': 'eu-west-2',
    'Europe(Paris)': 'eu-west-3',
    'Europe(Stockholm)': 'eu-north-1',
    'Middle East(Bahrain)': 'me-south-1',
    'South America(São Paulo)': 'sa-east-1'
  }

  const regionsListArr = [
    { value: 'US East (N. Virginia)' },
    { value: 'US East(Ohio)' },
    { value: 'US West(N.California)' },
    { value: 'US West(Oregon)' },
    { value: 'Asia Pacific(Hong Kong)' },
    { value: 'Asia Pacific(Mumbai)' },
    { value: 'Asia Pacific(Seoul)' },
    { value: 'Asia Pacific(Singapore)' },
    { value: 'Asia Pacific(Sydney)' },
    { value: 'Asia Pacific(Tokyo)' },
    { value: 'Canada(Central)' },
    { value: 'Europe(Frankfurt)' },
    { value: 'Europe(Ireland)' },
    { value: 'Europe(London)' },
    { value: 'Europe(Paris)' },
    { value: 'Europe(Stockholm)' },
    { value: 'Middle East(Bahrain)' },
    { value: 'South America(São Paulo)' }
  ];

  let clusterList = [
    'cluster1',
    'cluster2',
    'cluster3',
    'cluster4',
    'cluster5',
    'cluster6',
    'cluster7',
    'cluster8',
    'cluster9',
    'cluster10',
    'cluster11',
    'cluster12',
    'cluster13',
    'cluster14',
    'cluster15',
    'cluster16',
  ];
  const clusterArr = [];
  const reRenderArr = [];

  clusterList.forEach(cluster => {
    clusterArr.push(
      <TouchableOpacity
        style={styles.clusterContainer}
        activeOpacity={0.7}
        onPress={() => props.navigation.navigate('Pods')}>
        <Text style={styles.clusterText}>
          {' '}
          CN:{props.clusterName} TP:{props.totalPods}{' '}
        </Text>
        <Text style={styles.statusText}>Status: </Text>
        <Badge status="success" badgeStyle={styles.badge} />
        <Icon
          name="chevron-right"
          size={15}
          color="gray"
          style={styles.arrow}
        />
      </TouchableOpacity>,
    );
  });

  return (
    <View>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView}>
          {/* <Text style={styles.test}>Select Namespace to View Pods</Text> */}
          <Dropdown
            label="Select a Region"
            data={regionsListArr}
            itemCount={4}
            dropdownOffset={{ top: 15, left: 0 }}
            style={styles.dropDown}
          />
          <ScrollView style={styles.clusterScroll}>{clusterArr}</ScrollView>
          {/* <TouchableOpacity
            style={styles.clusterButton}
            behavior="padding"
            enabled
            onPress={() => props.navigation.navigate('Pods')}>
            <Text>
              {' '}
              Cluster: {props.clusterName} Pods: {props.totalPods}{' '}
            </Text>
          </TouchableOpacity> */}
          <Button
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'blue',
            }}
            color='red'
            title="Sign Out"
            onPress={() => props.navigation.navigate('ShipM8')}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default connect(mapStateToProps)(React.memo(Main));

const styles = StyleSheet.create({
  clusterButton: {
    backgroundColor: 'grey',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  safeArea: {
    backgroundColor: 'white',
    marginHorizontal: 30,
    height: '100%',
  },
  scrollView: {
    marginHorizontal: 20,
    marginTop: 30,
  },

  regionPickText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  clusterContainer: {
    marginTop: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginBottom: 6,
    marginLeft: 6,
    height: 48,
    width: '96%',
    paddingVertical: 12,
    paddingLeft: 6,
    borderStyle: 'solid',
    borderColor: '#063CB9',
    borderWidth: 1,
    borderRadius: 8,
    alignContent: 'center',
  },
  clusterText: {
    fontSize: 16,
    marginRight: 8,
    width: 200,
    backgroundColor: 'white',
  },
  statusText: {
    fontSize: 16,
    backgroundColor: 'white',
    color: 'gray',
  },
  clusterScroll: {
    backgroundColor: '#69ADFF',
    marginTop: 10,
    height: 580,
  },
  arrow: {
    marginLeft: 4,
    marginTop: 4,
  },
  badge: {
    marginLeft: 0,
    marginTop: 7,
  },
});

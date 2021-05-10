/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, ActivityIndicator} from 'react-native';

import * as DocumentPicker from 'expo-document-picker';
import {unzip} from 'react-native-zip-archive';
import * as FileSystem from 'expo-file-system';

import MapView, {LocalTile} from 'react-native-maps';

// import { Container } from './styles';

const src = () => {
  const [pathMap, setPathMap] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Button
        onPress={async () => {
          setLoading(true);
          const teste = await DocumentPicker.getDocumentAsync();

          console.log('aqui', teste);

          unzip(teste.uri, FileSystem.cacheDirectory + 'teste')
            .then(path => {
              console.log(`unzip completed at ${path}`);

              FileSystem.readDirectoryAsync('file://' + path + '/tiles').then(
                response => {
                  setPathMap('file://' + path + '/tiles');
                  console.log('files___', response);
                },
              );
            })
            .catch(error => {
              console.error(error);
            })
            .finally(() => {
              setLoading(false);
            });
        }}
        title="aqui"
      />

      {loading && <ActivityIndicator color="#fff" size="large" />}

      <MapView
        initialRegion={{
          latitude: -24.283063,
          longitude: -53.839415,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{
          width: 300,
          height: 700,
        }}>
        <LocalTile
          pathTemplate={pathMap + '/{z}/{x}/{y}.png'}
          tileSize={126}
          style={{zIndex: -1}}
        />
      </MapView>
    </>
  );
};

export default src;

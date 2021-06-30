/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect, useMemo} from 'react';
import {Button, ActivityIndicator, Dimensions} from 'react-native';

import * as DocumentPicker from 'expo-document-picker';
import {unzip} from 'react-native-zip-archive';
import * as FileSystem from 'expo-file-system';

import MapView, {UrlTile, Polygon} from 'react-native-maps';

const data = [
  {
    id: 1268,
    meta: null,
    dataCriacao: '2021-06-07T10:24:51.205',
    dataModificacao: null,
    deletado: false,
    nome: 'Ordem - Cadastro Técnico Multifinalitário',
    fluxoTrabalho: {
      id: 84,
      meta: null,
      dataCriacao: '2021-06-09T12:03:55.159',
      dataModificacao: null,
      deletado: false,
      geom:
        '{"type":"MultiPolygon","coordinates":[[[[-5993449.986098404,-2787948.634169519],[-5993533.589098091,-2787693.0478561902],[-5993777.23212575,-2787774.2621987434],[-5993739.013611607,-2787905.6383411083],[-5993614.8034406435,-2787862.6425126977],[-5993574.196269367,-2787989.241340795],[-5993449.986098404,-2787948.634169519]]],[[[-5993461.929384073,-2787408.7976572546],[-5993385.492355788,-2787661.9953134493],[-5993129.906042459,-2787583.16962803],[-5993168.124556602,-2787458.959457067],[-5993043.914385639,-2787425.518257192],[-5993082.132899782,-2787291.753457693],[-5993461.929384073,-2787408.7976572546]]],[[[-5993973.102010731,-2787564.060370959],[-5993899.05363958,-2787810.092055752],[-5994030.4297819445,-2787860.253855564],[-5994102.089495962,-2787599.890227968],[-5993973.102010731,-2787564.060370959]]]]}',
      clienteId: null,
      geoJson: null,
      nome: 'Fluxo - Múltiplos Polígonos',
      tipoMapa: 'openstreet',
      estadoDoFluxo: 'NOVO',
      dataInicio: '2021-06-09T03:00:00',
      dataFim: '2021-06-23T03:00:00',
      permitePontoForaLimite: false,
      avisoCercaDigital: false,
      geom3857: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-5993449.986098404, -2787948.634169519],
              [-5993533.589098091, -2787693.0478561902],
              [-5993777.23212575, -2787774.2621987434],
              [-5993739.013611607, -2787905.6383411083],
              [-5993614.8034406435, -2787862.6425126977],
              [-5993574.196269367, -2787989.241340795],
              [-5993449.986098404, -2787948.634169519],
            ],
          ],
          [
            [
              [-5993461.929384073, -2787408.7976572546],
              [-5993385.492355788, -2787661.9953134493],
              [-5993129.906042459, -2787583.16962803],
              [-5993168.124556602, -2787458.959457067],
              [-5993043.914385639, -2787425.518257192],
              [-5993082.132899782, -2787291.753457693],
              [-5993461.929384073, -2787408.7976572546],
            ],
          ],
          [
            [
              [-5993973.102010731, -2787564.060370959],
              [-5993899.05363958, -2787810.092055752],
              [-5994030.4297819445, -2787860.253855564],
              [-5994102.089495962, -2787599.890227968],
              [-5993973.102010731, -2787564.060370959],
            ],
          ],
        ],
      },
      geom4326: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-53.8400772711813, -24.283144350004832],
              [-53.84082828970547, -24.28105149947983],
              [-53.843016972261616, -24.281716521141906],
              [-53.84267364950771, -24.28279228410508],
              [-53.841557850557514, -24.282440217229336],
              [-53.84119307013149, -24.28347685579172],
              [-53.8400772711813, -24.283144350004832],
            ],
          ],
          [
            [
              [-53.840184559541896, -24.278723896241384],
              [-53.83949791403408, -24.28079722557115],
              [-53.83720194311732, -24.280151758747504],
              [-53.83754526587123, -24.279134652853482],
              [-53.83642946692104, -24.278860815259677],
              [-53.83677278967495, -24.27776545898097],
              [-53.840184559541896, -24.278723896241384],
            ],
          ],
          [
            [
              [-53.844776501375385, -24.27999528144779],
              [-53.8441113135397, -24.282009911944648],
              [-53.845291485506245, -24.282420657929837],
              [-53.84593521566982, -24.280288676226636],
              [-53.844776501375385, -24.27999528144779],
            ],
          ],
        ],
      },
      equipe: {
        id: 10,
        meta: null,
        dataCriacao: '2020-12-02T16:50:23.095',
        dataModificacao: '2021-04-21T09:08:38.750152',
        deletado: false,
        nome: 'Equipe Admin',
        usuarios: [
          {
            id: 1250,
            meta: null,
            dataCriacao: '2020-11-27T14:28:36.903381',
            dataModificacao: null,
            deletado: false,
            nome: 'admin',
          },
          {
            id: 2590,
            meta: null,
            dataCriacao: '2020-11-27T14:28:37.310465',
            dataModificacao: null,
            deletado: false,
            nome: 'alfredo',
          },
          {
            id: 3365,
            meta: null,
            dataCriacao: '2020-11-27T14:28:37.323033',
            dataModificacao: null,
            deletado: false,
            nome: 'lucas',
          },
        ],
        supervisor: {
          id: 1250,
          meta: null,
          dataCriacao: '2020-11-27T14:28:36.903381',
          dataModificacao: null,
          deletado: false,
          nome: 'admin',
        },
        modulo: {
          id: 35,
          meta: null,
          dataCriacao: '2020-11-14T11:29:12.570265',
          dataModificacao: null,
          deletado: false,
          nome: 'Cadastro Técnico Multifinalitário',
          descricao: null,
          versao: null,
        },
      },
      plano: {
        id: 13,
        meta: null,
        dataCriacao: '2021-04-21T09:07:17.818',
        dataModificacao: null,
        deletado: false,
        modulo: {
          id: 1080,
          meta: null,
          dataCriacao: '2021-04-21T09:06:36.220127',
          dataModificacao: null,
          deletado: false,
          nome: 'Pesquisa Imobiliária',
          descricao: null,
          versao: null,
        },
        nome: 'Pesquisa Imobiliária',
        formularios: [
          {
            id: 4,
            meta: null,
            dataCriacao: '2021-04-21T08:31:56.410335',
            dataModificacao: null,
            deletado: false,
            nome: 'Pesquisa Imobiliaria',
          },
        ],
      },
      modulo: {
        id: 35,
        meta: null,
        dataCriacao: null,
        dataModificacao: null,
        deletado: false,
        nome: null,
        descricao: null,
        versao: null,
      },
    },
    modulo: {
      id: 35,
      meta: null,
      dataCriacao: null,
      dataModificacao: null,
      deletado: false,
      nome: null,
      descricao: null,
      versao: null,
    },
    usuario: {
      id: 3365,
      meta: {
        coresCamadas: {
          Quadras: {
            color: '#851B0B10',
            corBorda: '#24ED09FF',
            espessura: 2.1,
            isPotilhado: false,
          },
        },
      },
      dataCriacao: null,
      dataModificacao: null,
      deletado: false,
      nome: null,
    },
    endereco: {
      id: 1268,
      meta: null,
      dataCriacao: '2021-06-07T10:24:51.172',
      dataModificacao: null,
      deletado: false,
      geom: null,
      geompolygon3857: {
        type: 'Polygon',
        coordinates: [
          [
            [-5993876.4605, -2787932.603],
            [-5993918.3728, -2787945.1381],
            [-5993930.8618, -2787903.5301],
            [-5993888.8097, -2787890.8484],
            [-5993876.4605, -2787932.603],
          ],
        ],
      },
      geompolygon4326: {
        type: 'Polygon',
        coordinates: [
          [
            [-53.84390835591369, -24.283013080916106],
            [-53.84428486051051, -24.283115722918456],
            [-53.84439705110635, -24.28277502101447],
            [-53.844019290664754, -24.282671178318402],
            [-53.84390835591369, -24.283013080916106],
          ],
        ],
      },
      geompoint3857: null,
      geompoint4326: null,
      geomline3857: null,
      geomline4326: null,
      clienteId: 103,
      geoJson: null,
      codigoBairro: 0,
      nomeBairro: null,
      cep: null,
      cidade: null,
      complemento: null,
      idLote: 6886,
      inscricaoCadastral: '01050030007',
      logradouro: null,
      lote: null,
      numero: 0,
      ladoQuarteirao: 0,
      numeroQuarteirao: 0,
      sequenciaQuarteirao: 0,
      referencia: null,
      sequencia: 0,
      tipoEndereco: null,
      tipoLogradouro: null,
      uf: null,
      zona: null,
    },
    osGeometrias: null,
  },
  {
    id: 1269,
    meta: null,
    dataCriacao: '2021-06-07T10:24:51.33',
    dataModificacao: null,
    deletado: false,
    nome: 'Ordem - Cadastro Técnico Multifinalitário',
    fluxoTrabalho: {
      id: 83,
      meta: null,
      dataCriacao: '2021-06-07T10:24:51.017',
      dataModificacao: null,
      deletado: false,
      geom:
        '{"type":"MultiPolygon","coordinates":[[[[-5993958.770067928,-2788094.342254687],[-5993705.572411734,-2788017.905226402],[-5993767.677497216,-2787779.039513011],[-5994030.429781945,-2787855.476541296],[-5993958.770067928,-2788094.342254687]]]]}',
      clienteId: null,
      geoJson: null,
      nome: 'Fluxo-Teste',
      tipoMapa: 'openstreet',
      estadoDoFluxo: 'NOVO',
      dataInicio: '2021-06-07T03:00:00',
      dataFim: '2021-06-21T03:00:00',
      permitePontoForaLimite: false,
      avisoCercaDigital: false,
      geom3857: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-5993958.770067928, -2788094.342254687],
              [-5993705.572411734, -2788017.905226402],
              [-5993767.677497216, -2787779.039513011],
              [-5994030.429781945, -2787855.476541296],
              [-5993958.770067928, -2788094.342254687],
            ],
          ],
        ],
      },
      geom4326: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-53.84464775534269, -24.28433745496218],
              [-53.842373242098056, -24.283711565234793],
              [-53.84293114157316, -24.28175563995477],
              [-53.84529148550626, -24.28238153932181],
              [-53.84464775534269, -24.28433745496218],
            ],
          ],
        ],
      },
      equipe: {
        id: 11,
        meta: null,
        dataCriacao: '2021-02-03T18:03:07.684',
        dataModificacao: '2021-04-21T09:08:29.478848',
        deletado: false,
        nome: 'Equipe Lucas',
        usuarios: [
          {
            id: 2590,
            meta: null,
            dataCriacao: '2020-11-27T14:28:37.310465',
            dataModificacao: null,
            deletado: false,
            nome: 'alfredo',
          },
          {
            id: 3365,
            meta: null,
            dataCriacao: '2020-11-27T14:28:37.323033',
            dataModificacao: null,
            deletado: false,
            nome: 'lucas',
          },
          {
            id: 3436,
            meta: null,
            dataCriacao: '2020-11-27T14:28:37.367539',
            dataModificacao: null,
            deletado: false,
            nome: 'anderson',
          },
        ],
        supervisor: {
          id: 3365,
          meta: null,
          dataCriacao: '2020-11-27T14:28:37.323033',
          dataModificacao: null,
          deletado: false,
          nome: 'lucas',
        },
        modulo: {
          id: 35,
          meta: null,
          dataCriacao: '2020-11-14T11:29:12.570265',
          dataModificacao: null,
          deletado: false,
          nome: 'Cadastro Técnico Multifinalitário',
          descricao: null,
          versao: null,
        },
      },
      plano: {
        id: 13,
        meta: null,
        dataCriacao: '2021-04-21T09:07:17.818',
        dataModificacao: null,
        deletado: false,
        modulo: {
          id: 1080,
          meta: null,
          dataCriacao: '2021-04-21T09:06:36.220127',
          dataModificacao: null,
          deletado: false,
          nome: 'Pesquisa Imobiliária',
          descricao: null,
          versao: null,
        },
        nome: 'Pesquisa Imobiliária',
        formularios: [
          {
            id: 4,
            meta: null,
            dataCriacao: '2021-04-21T08:31:56.410335',
            dataModificacao: null,
            deletado: false,
            nome: 'Pesquisa Imobiliaria',
          },
        ],
      },
      modulo: {
        id: 35,
        meta: null,
        dataCriacao: null,
        dataModificacao: null,
        deletado: false,
        nome: null,
        descricao: null,
        versao: null,
      },
    },
    modulo: {
      id: 35,
      meta: null,
      dataCriacao: null,
      dataModificacao: null,
      deletado: false,
      nome: null,
      descricao: null,
      versao: null,
    },
    usuario: {
      id: 3365,
      meta: {
        coresCamadas: {
          Quadras: {
            color: '#851B0B10',
            corBorda: '#24ED09FF',
            espessura: 2.1,
            isPotilhado: false,
          },
        },
      },
      dataCriacao: null,
      dataModificacao: null,
      deletado: false,
      nome: null,
    },
    endereco: {
      id: 1269,
      meta: null,
      dataCriacao: '2021-06-07T10:24:51.193',
      dataModificacao: null,
      deletado: false,
      geom: null,
      geompolygon3857: {
        type: 'Polygon',
        coordinates: [
          [
            [-5993930.8618, -2787903.5258],
            [-5993918.3728, -2787945.1338],
            [-5993939.448, -2787951.4369],
            [-5993945.5606, -2787930.9401],
            [-5993954.995, -2787899.3044],
            [-5993934.0121, -2787892.9458],
            [-5993930.8618, -2787903.5258],
          ],
        ],
      },
      geompolygon4326: {
        type: 'Polygon',
        coordinates: [
          [
            [-53.84439705110635, -24.2827749858044],
            [-53.84428486051051, -24.2831156877085],
            [-53.84447418225327, -24.283167299774792],
            [-53.84452909267333, -24.282999464473964],
            [-53.8446138433305, -24.282740419347405],
            [-53.84442535073275, -24.282688352651885],
            [-53.84439705110635, -24.2827749858044],
          ],
        ],
      },
      geompoint3857: null,
      geompoint4326: null,
      geomline3857: null,
      geomline4326: null,
      clienteId: 103,
      geoJson: null,
      codigoBairro: 0,
      nomeBairro: null,
      cep: null,
      cidade: null,
      complemento: null,
      idLote: 6933,
      inscricaoCadastral: '01050030008',
      logradouro: null,
      lote: null,
      numero: 0,
      ladoQuarteirao: 0,
      numeroQuarteirao: 0,
      sequenciaQuarteirao: 0,
      referencia: null,
      sequencia: 0,
      tipoEndereco: null,
      tipoLogradouro: null,
      uf: null,
      zona: null,
    },
    osGeometrias: null,
  },
  {
    id: 1270,
    meta: null,
    dataCriacao: '2021-06-07T10:24:51.341',
    dataModificacao: null,
    deletado: false,
    nome: 'Ordem - Cadastro Técnico Multifinalitário',
    fluxoTrabalho: {
      id: 83,
      meta: null,
      dataCriacao: '2021-06-07T10:24:51.017',
      dataModificacao: null,
      deletado: false,
      geom:
        '{"type":"MultiPolygon","coordinates":[[[[-5993958.770067928,-2788094.342254687],[-5993705.572411734,-2788017.905226402],[-5993767.677497216,-2787779.039513011],[-5994030.429781945,-2787855.476541296],[-5993958.770067928,-2788094.342254687]]]]}',
      clienteId: null,
      geoJson: null,
      nome: 'Fluxo-Teste',
      tipoMapa: 'openstreet',
      estadoDoFluxo: 'NOVO',
      dataInicio: '2021-06-07T03:00:00',
      dataFim: '2021-06-21T03:00:00',
      permitePontoForaLimite: false,
      avisoCercaDigital: false,
      geom3857: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-5993958.770067928, -2788094.342254687],
              [-5993705.572411734, -2788017.905226402],
              [-5993767.677497216, -2787779.039513011],
              [-5994030.429781945, -2787855.476541296],
              [-5993958.770067928, -2788094.342254687],
            ],
          ],
        ],
      },
      geom4326: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-53.84464775534269, -24.28433745496218],
              [-53.842373242098056, -24.283711565234793],
              [-53.84293114157316, -24.28175563995477],
              [-53.84529148550626, -24.28238153932181],
              [-53.84464775534269, -24.28433745496218],
            ],
          ],
        ],
      },
      equipe: {
        id: 11,
        meta: null,
        dataCriacao: '2021-02-03T18:03:07.684',
        dataModificacao: '2021-04-21T09:08:29.478848',
        deletado: false,
        nome: 'Equipe Lucas',
        usuarios: [
          {
            id: 2590,
            meta: null,
            dataCriacao: '2020-11-27T14:28:37.310465',
            dataModificacao: null,
            deletado: false,
            nome: 'alfredo',
          },
          {
            id: 3365,
            meta: null,
            dataCriacao: '2020-11-27T14:28:37.323033',
            dataModificacao: null,
            deletado: false,
            nome: 'lucas',
          },
          {
            id: 3436,
            meta: null,
            dataCriacao: '2020-11-27T14:28:37.367539',
            dataModificacao: null,
            deletado: false,
            nome: 'anderson',
          },
        ],
        supervisor: {
          id: 3365,
          meta: null,
          dataCriacao: '2020-11-27T14:28:37.323033',
          dataModificacao: null,
          deletado: false,
          nome: 'lucas',
        },
        modulo: {
          id: 35,
          meta: null,
          dataCriacao: '2020-11-14T11:29:12.570265',
          dataModificacao: null,
          deletado: false,
          nome: 'Cadastro Técnico Multifinalitário',
          descricao: null,
          versao: null,
        },
      },
      plano: {
        id: 13,
        meta: null,
        dataCriacao: '2021-04-21T09:07:17.818',
        dataModificacao: null,
        deletado: false,
        modulo: {
          id: 1080,
          meta: null,
          dataCriacao: '2021-04-21T09:06:36.220127',
          dataModificacao: null,
          deletado: false,
          nome: 'Pesquisa Imobiliária',
          descricao: null,
          versao: null,
        },
        nome: 'Pesquisa Imobiliária',
        formularios: [
          {
            id: 4,
            meta: null,
            dataCriacao: '2021-04-21T08:31:56.410335',
            dataModificacao: null,
            deletado: false,
            nome: 'Pesquisa Imobiliaria',
          },
        ],
      },
      modulo: {
        id: 35,
        meta: null,
        dataCriacao: null,
        dataModificacao: null,
        deletado: false,
        nome: null,
        descricao: null,
        versao: null,
      },
    },
    modulo: {
      id: 35,
      meta: null,
      dataCriacao: null,
      dataModificacao: null,
      deletado: false,
      nome: null,
      descricao: null,
      versao: null,
    },
    usuario: {
      id: 3365,
      meta: {
        coresCamadas: {
          Quadras: {
            color: '#851B0B10',
            corBorda: '#24ED09FF',
            espessura: 2.1,
            isPotilhado: false,
          },
        },
      },
      dataCriacao: null,
      dataModificacao: null,
      deletado: false,
      nome: null,
    },
    endereco: {
      id: 1270,
      meta: null,
      dataCriacao: '2021-06-07T10:24:51.234',
      dataModificacao: null,
      deletado: false,
      geom: null,
      geompolygon3857: {
        type: 'Polygon',
        coordinates: [
          [
            [-5993888.8097, -2787890.8441],
            [-5993930.8618, -2787903.5258],
            [-5993934.0121, -2787892.9458],
            [-5993937.1745, -2787882.4222],
            [-5993895.0571, -2787869.7209],
            [-5993888.8097, -2787890.8441],
          ],
        ],
      },
      geompolygon4326: {
        type: 'Polygon',
        coordinates: [
          [
            [-53.844019290664754, -24.282671143108313],
            [-53.84439705110635, -24.2827749858044],
            [-53.84442535073275, -24.282688352651885],
            [-53.844453759055284, -24.282602181265865],
            [-53.844075412013815, -24.282498177935757],
            [-53.844019290664754, -24.282671143108313],
          ],
        ],
      },
      geompoint3857: null,
      geompoint4326: null,
      geomline3857: null,
      geomline4326: null,
      clienteId: 103,
      geoJson: null,
      codigoBairro: 0,
      nomeBairro: null,
      cep: null,
      cidade: null,
      complemento: null,
      idLote: 6993,
      inscricaoCadastral: '01050030005',
      logradouro: null,
      lote: null,
      numero: 0,
      ladoQuarteirao: 0,
      numeroQuarteirao: 0,
      sequenciaQuarteirao: 0,
      referencia: null,
      sequencia: 0,
      tipoEndereco: null,
      tipoLogradouro: null,
      uf: null,
      zona: null,
    },
    osGeometrias: null,
  },
  {
    id: 1273,
    meta: null,
    dataCriacao: '2021-06-07T10:24:51.407',
    dataModificacao: null,
    deletado: false,
    nome: 'Ordem - Cadastro Técnico Multifinalitário',
    fluxoTrabalho: {
      id: 83,
      meta: null,
      dataCriacao: '2021-06-07T10:24:51.017',
      dataModificacao: null,
      deletado: false,
      geom:
        '{"type":"MultiPolygon","coordinates":[[[[-5993958.770067928,-2788094.342254687],[-5993705.572411734,-2788017.905226402],[-5993767.677497216,-2787779.039513011],[-5994030.429781945,-2787855.476541296],[-5993958.770067928,-2788094.342254687]]]]}',
      clienteId: null,
      geoJson: null,
      nome: 'Fluxo-Teste',
      tipoMapa: 'openstreet',
      estadoDoFluxo: 'NOVO',
      dataInicio: '2021-06-07T03:00:00',
      dataFim: '2021-06-21T03:00:00',
      permitePontoForaLimite: false,
      avisoCercaDigital: false,
      geom3857: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-5993958.770067928, -2788094.342254687],
              [-5993705.572411734, -2788017.905226402],
              [-5993767.677497216, -2787779.039513011],
              [-5994030.429781945, -2787855.476541296],
              [-5993958.770067928, -2788094.342254687],
            ],
          ],
        ],
      },
      geom4326: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-53.84464775534269, -24.28433745496218],
              [-53.842373242098056, -24.283711565234793],
              [-53.84293114157316, -24.28175563995477],
              [-53.84529148550626, -24.28238153932181],
              [-53.84464775534269, -24.28433745496218],
            ],
          ],
        ],
      },
      equipe: {
        id: 11,
        meta: null,
        dataCriacao: '2021-02-03T18:03:07.684',
        dataModificacao: '2021-04-21T09:08:29.478848',
        deletado: false,
        nome: 'Equipe Lucas',
        usuarios: [
          {
            id: 2590,
            meta: null,
            dataCriacao: '2020-11-27T14:28:37.310465',
            dataModificacao: null,
            deletado: false,
            nome: 'alfredo',
          },
          {
            id: 3365,
            meta: null,
            dataCriacao: '2020-11-27T14:28:37.323033',
            dataModificacao: null,
            deletado: false,
            nome: 'lucas',
          },
          {
            id: 3436,
            meta: null,
            dataCriacao: '2020-11-27T14:28:37.367539',
            dataModificacao: null,
            deletado: false,
            nome: 'anderson',
          },
        ],
        supervisor: {
          id: 3365,
          meta: null,
          dataCriacao: '2020-11-27T14:28:37.323033',
          dataModificacao: null,
          deletado: false,
          nome: 'lucas',
        },
        modulo: {
          id: 35,
          meta: null,
          dataCriacao: '2020-11-14T11:29:12.570265',
          dataModificacao: null,
          deletado: false,
          nome: 'Cadastro Técnico Multifinalitário',
          descricao: null,
          versao: null,
        },
      },
      plano: {
        id: 13,
        meta: null,
        dataCriacao: '2021-04-21T09:07:17.818',
        dataModificacao: null,
        deletado: false,
        modulo: {
          id: 1080,
          meta: null,
          dataCriacao: '2021-04-21T09:06:36.220127',
          dataModificacao: null,
          deletado: false,
          nome: 'Pesquisa Imobiliária',
          descricao: null,
          versao: null,
        },
        nome: 'Pesquisa Imobiliária',
        formularios: [
          {
            id: 4,
            meta: null,
            dataCriacao: '2021-04-21T08:31:56.410335',
            dataModificacao: null,
            deletado: false,
            nome: 'Pesquisa Imobiliaria',
          },
        ],
      },
      modulo: {
        id: 35,
        meta: null,
        dataCriacao: null,
        dataModificacao: null,
        deletado: false,
        nome: null,
        descricao: null,
        versao: null,
      },
    },
    modulo: {
      id: 35,
      meta: null,
      dataCriacao: null,
      dataModificacao: null,
      deletado: false,
      nome: null,
      descricao: null,
      versao: null,
    },
    usuario: {
      id: 2590,
      meta: {
        lotes: {
          label: 'Editar Lotes',
          style: {
            estilo: {
              corBorda: 'rgba(18, 227, 213, 1.0)',
              espessura: 2,
              valorInput: 'rgba(255, 255, 255, 0)',
            },
          },
          camada: 'lotes',
        },
        pontos: {
          label: 'Editar Pontos',
          style: {estilo: {espessura: 1}},
          camada: 'pontos',
        },
        bairros: {
          label: 'Editar Bairros',
          style: {
            estilo: {
              corBorda: 'rgba(46, 0, 255, 1.0)',
              espessura: 2.4,
              valorInput: 'rgba(255, 255, 255, 0)',
              isPotilhado: true,
            },
          },
          camada: 'bairros',
        },
        quadras: {
          label: 'Editar Quadras',
          style: {
            estilo: {
              corBorda: 'rgba(50, 201, 189, 1.0)',
              espessura: 2.5,
              valorInput: 'rgba(255, 255, 255, 0)',
            },
          },
          camada: 'quadras',
        },
        setores: {
          label: 'Editar Setores',
          style: {estilo: {espessura: 1}},
          camada: 'setores',
        },
        distrito: {
          label: 'Editar Distritos',
          style: {estilo: {espessura: 1}},
          camada: 'distrito',
        },
        loteamento: {
          label: 'Editar Loteamento',
          style: {estilo: {espessura: 1}},
          camada: 'loteamento',
        },
        edificacoes: {
          label: 'Editar Edificações',
          style: {
            estilo: {
              corBorda: 'rgba(200, 25, 194, 1.0)',
              espessura: 2,
              valorInput: 'rgba(255, 255, 255, 0)',
            },
          },
          camada: 'edificacoes',
        },
        logradouros: {
          label: 'Editar Logradouros',
          style: {estilo: {espessura: 1}},
          camada: 'logradouros',
        },
        limiteMunicipal: {
          label: 'Editar Limite Municipal',
          style: {estilo: {espessura: 1}},
          camada: 'limiteMunicipal',
        },
        perimetroUrbano: {
          label: 'Editar Perímetro Urbano',
          style: {estilo: {espessura: 1}},
          camada: 'perimetroUrbano',
        },
      },
      dataCriacao: null,
      dataModificacao: null,
      deletado: false,
      nome: null,
    },
    endereco: {
      id: 1273,
      meta: null,
      dataCriacao: '2021-06-07T10:24:51.308',
      dataModificacao: null,
      deletado: false,
      geom: null,
      geompolygon3857: {
        type: 'Polygon',
        coordinates: [
          [
            [-5993940.3609, -2787871.7744],
            [-5993940.3609, -2787871.7744],
            [-5993898.1808, -2787859.1593],
            [-5993895.0571, -2787869.7209],
            [-5993937.1745, -2787882.4222],
            [-5993940.3609, -2787871.7744],
          ],
        ],
      },
      geompolygon4326: {
        type: 'Polygon',
        coordinates: [
          [
            [-53.84448238297351, -24.282514992821767],
            [-53.84448238297351, -24.282514992821767],
            [-53.844103472688346, -24.282411695261157],
            [-53.844075412013815, -24.282498177935757],
            [-53.844453759055284, -24.282602181265865],
            [-53.84448238297351, -24.282514992821767],
          ],
        ],
      },
      geompoint3857: null,
      geompoint4326: null,
      geomline3857: null,
      geomline4326: null,
      clienteId: 103,
      geoJson: null,
      codigoBairro: 0,
      nomeBairro: null,
      cep: null,
      cidade: null,
      complemento: null,
      idLote: 14840,
      inscricaoCadastral: '01050030004',
      logradouro: null,
      lote: null,
      numero: 0,
      ladoQuarteirao: 0,
      numeroQuarteirao: 0,
      sequenciaQuarteirao: 0,
      referencia: null,
      sequencia: 0,
      tipoEndereco: null,
      tipoLogradouro: null,
      uf: null,
      zona: null,
    },
    osGeometrias: null,
  },
];

const {height, width} = Dimensions.get('window');

const src = () => {
  const [pathMap, setPathMap] = useState('');
  const [loading, setLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const usualData = useMemo(() => {
    const cerca = data[0].fluxoTrabalho.geom4326.coordinates.map(item => {
      const itemCoordinate = item[0].map(coord => ({
        longitude: coord[0],
        latitude: coord[1],
      }));

      return itemCoordinate;
    });

    console.log('cerca', cerca);

    const lotes = data.map(item => {
      const itemCoordinate = item.endereco.geompolygon4326.coordinates[0].map(
        coord => ({longitude: coord[0], latitude: coord[1]}),
      );

      return itemCoordinate;
    });

    return {
      cerca,
      lotes,
    };
  }, []);

  useEffect(() => {
    FileSystem.readDirectoryAsync(
      'file://' + '/data/user/0/com.tiles/cache/teste' + '/tiles',
    ).then(response => {
      setPathMap('file://' + '/data/user/0/com.tiles/cache/teste' + '/tiles');
    });
  }, []);

  return (
    <>
      <Button
        onPress={async () => {
          setLoading(true);
          const teste = await DocumentPicker.getDocumentAsync();

          unzip(teste.uri, FileSystem.cacheDirectory + 'teste')
            .then(path => {
              console.log(`unzip completed at ${path}`);

              FileSystem.readDirectoryAsync('file://' + path + '/tiles').then(
                response => {
                  setPathMap('file://' + path + '/tiles');
                  setShowMap(true);
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
        title="Buscar"
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
          width,
          height: height - 94,
        }}>
        {usualData.lotes.map((item, index) => (
          <Polygon
            key={index}
            zIndex={1}
            fillColor="#851B0B10"
            strokeColor="#24ED09FF"
            coordinates={item}
          />
        ))}

        {usualData.cerca.map((item, index) => (
          <Polygon
            key={index}
            zIndex={1}
            fillColor="#851B0B10"
            strokeColor="#000"
            coordinates={item}
          />
        ))}

        {showMap && (
          <UrlTile urlTemplate={pathMap + '/{z}/{x}/{y}.png'} size={256} />
        )}
      </MapView>
      <Button title="Exibir/tirar" onPress={() => setShowMap(!showMap)} />
    </>
  );
};

export default src;

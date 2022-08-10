export function getJsonInspectorConfig(mapName="") {
  const MsgPorDefecto =
    "En este mapa Ud. puede buscar por:<br> \
- Dirección Completa<br> \
- Localidad<br> \
- Cuenta de Rentas<br> \
- Nomenclatura Catastro Provincial<br><br> \
Presione Enter para buscar.";
  const servicesPorDefecto = [
    "getubi",
    "getLocalidadesYParajes",
    "getpornomycuenta",
  ];

  const MapLayerConfig = {
    "Coberturas Agrícolas Estivales 2020-2021": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      dataOwner: {
        name: "IDECOR",
        url: "http://idecor.cba.gov.ar/",
      },
      layers: {
        parcelas_graf: {
          identify: true,
          title: "Parcela - DGC",
          service: "/parcelascatastroservice",
          field: "par_idparcela",
          kml: true,
        },
        radios_urbanos: {
          identify: false,
        },
        departamentos: {
          identify: false,
          title: "Departamento",
        },
        provincia: {
          identify: false,
          title: "Provincia",
        },
        radios_urbanos: {
          identify: false,
          title: "Radio Municipal",
        },
        pedania: {
          identify: false,
        },
        coberturas_estivales_maiz_2021: {
          identify: false,
        },

        coberturas_estivales_soja_2021: {
          identify: false,
        },

        coberturas_estivales_otros_2021: {
          identify: false,
        }

      },
    },
    "Valor de Alquileres Urbanos 2021": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      dataOwner: {
        name: "IDECOR",
        url: "http://idecor.cba.gov.ar/",
      },
      layers: {
        parcelas_graf: {
          identify: true,
          title: "Parcela - DGC",
          service: "/parcelascatastroservice",
          field: "par_idparcela",
          kml: true,
        },
        radios_urbanos: {
          identify: false,
        },

        alquileres_parcela_urbano_2022: {
          identify: true,
          title: "Valor Unitario de Alquiler 2021 ($/m²)",
          attributeDictionary: {
            vua: "VUA Residencial",
            vua_comercial: "VUA Comercial",
            vm2: "Valor por m² Residencial Final",
            vm2_comercial: "Valor por m² Comercial Final",
          },
          kml: true,
        },
      },
    },
    "Contribuyentes Omega": {
      dataOwner: {
        name: "Dirección General de Rentas	",
        url: "https://www.rentascordoba.gob.ar/",
      },

      buscaService: {
        services: [
          "getubi",
          "getpornomycuenta",
          "getOmegaCliente",
          "getOmegaInmueble",
          "getLocalidadesYParajes"
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
        - Nomenclatura Catastral Provincial<br> \
        - Cuenta de Rentas<br> \
        - CUIT Contribuyente<br> \
        - CUIT Inmuebles<br> \
        - Nombre Contribuyente<br> \
        - Dirección Completa<br> \
        - Localidades y Parajes<br><br> \
        Presione Enter para buscar.",
      },
      mapaBase: "OpenStreetMap",
      layers: {
        /* GRUPO LIMITES */
        localidad_punto: {
          identify: false,
          title: "Localidad",
        },
        radios_urbanos: {
          identify: false,
          title: "Localidad",
        },
        provincia: {
          identify: false,
        },
        departamentos: {
          identify: false,
        },
        pedania: {
          identify: false,
        },
        /*FIN GRUPO LIMITES */
        Manzana: {
          identify: false,
        },
        radios_urbanos: {
          identify: false,
          title: "Localidad",
        },
        omega_clientes: {
          identify: true,
          title: "Contribuyente",
          kml: false,
          filters: {
            cli001: {
              title: "Por rubro",
              label: "Rubro de contribuyentes",
              toUpper: true,
              removeAccents: true,
              cql_filter: "strStripAccents(strToUpperCase(rubro)) ILIKE '%**%'",
              comboListConfig: {
                comboListSchema: "sc_omega_geo",
                comboListTable: "omega_geo_se",
                comboListField: "rubro",
                limit: 30
              }
            },
            cli002: {
              title: "Por subrubro",
              label: "Subrubro de contribuyentes",
              removeAccents: true,
              toUpper: true,
              cql_filter: "strStripAccents(strToUpperCase(subrubro)) ILIKE '%**%'",
            },
            cli003: {
              title: "Por sector económico",
              label: "Sector económico",
              removeAccents: true,
              toUpper: true,
              cql_filter: "strStripAccents(strToUpperCase(sector_economico)) ILIKE '%**%'",
            },
            cli004: {
              title: "Contribuyente por denominación",
              label: "Contribuyente",
              toUpper: true,
              removeAccents: true,
              cql_filter: "strStripAccents(strToUpperCase(denominacion)) ILIKE '%**%'",
            }    
          },
          attributeDictionary: {
            nro_inscripcion_iibb: "Nro. de inscripción",
            cuit: "CUIT",
            denominacion: "Denominación",
            tipo_persona: "Tipo de persona",
            regimen: "Régimen",
            rubro: "Rubro",
            subrubro: "Subrubro",
            estado_iibb: "Estado",
            impuesto_determinado: {
              label: "Impuesto determinado",
              NumberFormat: {
                intlCode: "es-AR",
                options: {
                  style: 'currency',
                  currency: 'ARS'
                }
              }
            },
            base_imponible: {
              label: "Base imponible",
              NumberFormat: {
                intlCode: "es-AR",
                options: {
                  style: 'currency',
                  currency: 'ARS'
                }
              }
            },
            deuda_total: {
              label: "Deuda total",
              NumberFormat: {
                intlCode: "es-AR",
                options: {
                  style: 'currency',
                  currency: 'ARS'
                }
              }
            },
            cant_automotor: "Cantidad automotores",
            cant_inmueble: "Cantidad inmuebles",
            cant_embarcacion: "Cantidad embarcaciones",
            sector_economico: "Sector económico"
          },
        },
        omega_inmuebles: {
          identify: true,
          title: "Inmueble Omega",
          kml: true,
          filters:{
            inm001: {
              title: "Inmueble por denominación",
              label: "Contribuyente",
              toUpper: true,
              removeAccents: true,
              cql_filter: "strStripAccents(strToUpperCase(denominacion)) ILIKE '%**%'",
            }    
          },
          attributeDictionary: {
            partida_inmobiliaria: "Nomenclatura",
            padron_municipal: "Número de cuenta",
            tipo_propiedad: "Tipo de propiedad",
            estado_propiedad: "Estado de propiedad",
            cuit_responsable: "CUIT contribuyente",
            fecha_lectura: "Fecha de lectura",
            denominacion: "Contribuyente",
            descripcion: "Descripcion",
          },
        },
        parcelas_deuda_inmobiliario: {
          identify: true,
          title: "Parcela",
          service: "/featureservice",
          field: "par_idparcela",
          kml: true,
        },
      },
    },
    OMEGA: {
      buscaService: {
        services: [
          "getubi",
          "getpornomycuenta",
          "getOmegaCliente",
          "getOmegaInmueble",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección completa<br> \
      - Nombre de Localidad<br> \
      - Cuenta de Rentas<br> \
      - Cuit Contribuyente<br> \
      - Cuit Inmueble<br> \
      - Denominación Contribuyente<br> \
      - Denominación Inmueble<br> \
      - Nomenclatura Catastral Provincial<br><br> \
      Presione Enter para buscar.",
      },
      layers: {
        Manzana: {
          identify: false,
        },
        radios_urbanos: {
          identify: false,
          title: "Localidad",
        },
        omega_clientes: {
          identify: true,
          title: "Contribuyente",
          kml: false,
          filters: {
            cli001: {
              title: "Por rubro",
              label: "Rubro de contribuyentes",
              toUpper: true,
              removeAccents: true,
              cql_filter: "strStripAccents(strToUpperCase(rubro)) ILIKE '%**%'",
            },
            cli002: {
              title: "Por subrubro",
              label: "Subrubro de contribuyentes",
              toUpper: true,
              removeAccents: true,
              cql_filter: "strStripAccents(strToUpperCase(subrubro)) ILIKE '%**%'",
            },
            cli003: {
              title: "Por sector económico",
              label: "Sector económico",
              toUpper: true,
              removeAccents: true,
              cql_filter: "strStripAccents(strToUpperCase(sector_economico)) ILIKE '%**%'",
            },
            cli004: {
              title: "Contribuyente por denominación",
              label: "Contribuyente",
              toUpper: true,
              removeAccents: true,
              cql_filter: "strStripAccents(strToUpperCase(denominacion)) ILIKE '%**%'",
            }            
          },
          attributeDictionary: {
            nro_inscripcion_iibb: "Nro de inscripción",
            cuit: "Cuit",
            denominacion: "Denominación",
            tipo_persona: "Tipo de persona",
            regimen: "Régimen",
            rubro: "Rubro",
            subrubro: "Subrubro",
            estado_iibb: "Estado",
            impuesto_determinado: "Impuesto determinado",
            base_imponible: "Base imponible",
            deuda_total: "Deuda total",
            cant_automotor: "Cantidad automotor",
            cant_inmueble: "Cantidad inmueble",
            cant_embarcacion: "Cantidad embarcacion",
            sector_economico: "Sector económico",
          },
        },
        provincia: {
          identify: false,
        },
        omega_inmuebles: {
          identify: true,
          title: "Inmueble Omega",
          kml: false,
          filters:{
            inm001: {
              title: "Inmueble por denominación",
              label: "Contribuyente",
              toUpper: true,
              removeAccents: true,
              cql_filter: "strStripAccents(strToUpperCase(denominacion)) ILIKE '%**%'",
            }   
          },
          attributeDictionary: {
            partida_inmobiliaria: "Partida inmobiliaria",
            padron_municipal: "Padrón municipal",
            fecha_inicio: "Fecha de inicio",
            fecha_rige: "Fecha rige",
            tipo_propiedad: "Tipo de propiedad",
            estado_propiedad: "Estado de propiedad",
            cuit_responsable: "Cuit",
            fecha_lectura: "Fecha de lectura",
            denominacion: "Denominación",
            descripcion: "Descripción",
          },
        },

        departamentos: {
          identify: false,
        },

        parcelas_graf: {
          title: "Parcela",
          identify: true,
          service: location.protocol +
            "//" +
            window.location.hostname +
            "/maps/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
      },
    },
    "Cartas de Suelo - Escalas de Reconocimiento": {
      buscaService: {
        services: [
          "getubi",
          "getpornomycuenta",
          "getcartasuelo250mil2022",
          "getcartasuelo500milcompleta2022",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
        - Dirección completa<br> \
        - Nombre de localidad<br> \
        - Símbolo de carta<br> \
        - Cuenta de Rentas<br> \
        - Nomenclatura catastral provincial<br><br> \
        Presione Enter para buscar.",
      },

      dataOwner: {
        name: "INTA y Gobierno de la Prov. de Córdoba",
        url: "http://suelos.cba.gov.ar/"
      },
      layers: {
        /* GRUPO LIMITES */
        localidad_punto: {
          identify: false,
          title: "Localidad",
        },
        radios_urbanos: {
          identify: false,
          title: "Localidad",
        },
        provincia: {
          identify: false,
        },
        departamentos: {
          identify: false,
        },
        pedania: {
          identify: false,
        },
        /*FIN GRUPO LIMITES */
        parcelas_graf: {
          identify: true,
          title: "Parcela - DGC",
          service: "/parcelascatastroservice",
          field: "par_idparcela",
          kml: true,
        },
        cartas_provincia_2021: {
          identify: true,
          title: "Carta Portal Suelos",
          service: "/cartas_suelo2021",
          field: "id",
        },
        carta_suelo_500mil_completa_2022: {
          identify: true,
          title: "Escala Semidetalle 1:500.000",
          kml: true,
          filters: {
            FRS500: {
              title: "Por capacidad de uso 1:500000",
              label: "Clase y subclase de capacidad de uso",
              toUpper: true,
              cql_filter: "strStripAccents(strToUpperCase(cu)) ILIKE '%**%'",
            }
          },
          attributeDictionary: {
            "uc": "Símbolo",
            "cu": "Capacidad de Uso",
            "clase": "Clase",
            "subclase": "Subclase",
            "ip": "Índice de Productividad",
            "paisaje": "Paisaje",
            "tipo_un": "Tipo de Unidad",
            "limitant_1": "Limitante 1",
            "limitant_2": "Limitante 2",
            "limitant_3": "Limitante 3",
            "comp_1": "Componente 1",
            "desc_1": "Fase 1",
            "porc_1": "% 1",
            "text_super": "Textura del horizonte superficial",
            "text_subsu": "Textura del horizonte subsuperficial",
            "drenaje_1": "Drenaje",
            "pendiente": "Pendiente",
            "comp_2": "Componente 2",
            "desc_2": "Fase 2",
            "porc_2": "% 2",
            "comp_3": "Componente 3",
            "desc_3": "Fase 3",
            "porc_3": "% 3",
            "comp_4": "Componente 4",
            "desc_4": "Fase 4",
            "porc_4": "% 4",
            "comp_5": "Componente 5",
            "desc_5": "Fase 5",
            "porc_5": "5%",

          }

        },
        "carta_suelo_250mil_2022": {
          identify: true,
          title: "Escala Semidetalle 1:250.000",
          kml: true,
          filters: {
            FRS250: {
              title: "Por capacidad de uso 1:250000",
              label: "Clase y subclase de capacidad de uso",
              toUpper: true,
              cql_filter: "strStripAccents(strToUpperCase(cu)) ILIKE '%**%'",
            }
          },
          attributeDictionary: {
            "uc": "Símbolo",
            "cu": "Capacidad de Uso",
            "clase": "Clase",
            "subclase": "Subclase",
            "paisaje": "Paisaje",
            "tipo_un": "Tipo de Unidad",
            "comp_1": "Componente 1",
            "porc_1": "% 1",
            "comp_2": "Componente 2",
            "porc_2": "% 2",
            "comp_3": "Componente 3",
            "porc_3": "% 3",
            "comp_4": "Componente 4",
            "porc_4": "% 4",
            "comp_5": "Componente 5",
            "porc_5": "% 5"
          }

        }
      }

    },
    "Cobertura y Uso de Suelo 2020-2021": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto
      },

      dataOwner: {
        name: "IDECOR",
        url: "http://idecor.cba.gov.ar/",
      },

      layers: {
        parcelas_graf: {
          identify: true,
          title: "Parcela - DGC",
          service: "/parcelascatastroservice",
          field: "par_idparcela",
          kml: true,
        },
        radios_urbanos: {
          identify: false
        },
        cobertura_y_uso_2021: {
          identify: true,
          title: "Land Cover (2020/21) 1ha",
          service: "/cobertura2021",
          field: "GRAY_INDEX",
          kml: false,
        },
        estadisticas_dpto: {
          identify: true,
          title: "Departamento",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre",
            superficie_dto: "Superficie total (ha)",
            monte: "Superficie Monte (ha)",
            matorral_arb: "Superficie Matorral/Arbustal (ha)",
            pastizal_nat: "Superficie Pastizal natural (ha)",
            arbustal_pastizal: "Superficie Arbustal/ Pastizal natural con roca o suelo desnudo (ha)",
            roca: "Superficie Roca (ha)",
            suelo_des: "Superficie Suelo desnudo o baja cobertura vegetal (ha)",
            salinas: "Superficie Salina (ha)",
            cuerpos_agua: "Superficie Cuerpo de agua (ha)",
            zona_anegable: "Superficie Zona anegable (ha)",
            cursos_agua: "Superficie Curso de agua (ha)",
            urbano_comp_a: "Superficie Urbano compacidad alta (ha)",
            urbano_comp_m: "Superficie Urbano compacidad media (ha)",
            urbano_comp_b: "Superficie Urbano compacidad baja (ha)",
            urbano_comp_mb: "Superficie Urbano compacidad muy baja (ha)",
            infra_vial: "Superficie Infraestructura vial (ha)",
            cultivo_ext: "Superficie Cultivo extensivo anual (ha)",
            cultivo_irrig: "Superficie Cultivo anual irrigado (ha)",
            pastura_imp: "Superficie Pastura implantada (ha)",
            pastura_nat: "Superficie Pastura natural manejada (ha)",
            cultivo_hort: "Superficie Cultivo hortícola multiespecífico (ha)",
            plant_forestal: "Superficie Plantación forestal (ha)",
            veg_lenosa: "Superficie Vegetación leñosa afectada por incendios (ha)",
            mapa: "Mapa de cobertura del departamento||Descargar||https://obs-idecor-mapas-docs.obs.sa-argentina-1.myhuaweicloud.com/pdf_LandCover/**.pdf",
          },
        },
      },
    },
    "Mapa Geológico": {
      buscaService: {
        services: ["getGeolog", "getubi", "getLocalidadesYParajes"],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Localidad<br> \
      - Nombre Departamento Geológico<br><br> \
      Presione Enter para buscar.",
      },
      dataOwner: {
        name: "SEGEMAR y Secretaría de Minería de Córdoba",
        url: "https://cordobaproduce.cba.gov.ar/secretaria-mineria/",
      },
      layers: {
        departamentos_geologia: {
          identify: true,
          title: "Departamento",
          kml: true,
          filters: {
            FPD: {
              label: "Nombre del departamento completo",
              title: "Por departamento",
              cql_filter: "strStripAccents(strToUpperCase(name)) = strStripAccents(strToUpperCase('**'))",
            },
            FPDA: {
              title: "Por departamento aprox.",
              cql_filter: "strStripAccents(name) ILIKE '%**%'",
            }
          },
          attributeDictionary: {
            name: "Departamento",
            sup_dpto: "Superficie total (ha)",
            pdf: {
              label: "Descarga mapa geológico por departamento",
              data: "Descarga Aquí",
              link: "https://obs-idecor-mapas-docs.obs.sa-argentina-1.myhuaweicloud.com/geologia/**.pdf"
            }

            ,
            c4p1c: "C4P1c (%)",
            ctb: "CTβ (%)",
            cy: "Cγ(%)",
            dchof: "DChoF (%)",
            dcmif: "DCmiF (%)",
            dctt: "DCπ (%)",
            dy: "Dγ (%)",
            ec: "Ec (%)",
            k1c: "K1c (%)",
            keb: "KEβ (%)",
            npup: "NPμP (%)",
            nppp: "NPρP (%)",
            npedap: "NPϵdaP (%)",
            npeesp: "NPϵesP (%)",
            npefip: "NPϵfiP (%)",
            npegnp: "NPϵgnP (%)",
            npehop: "NPϵhoP (%)",
            npemap: "NPϵmaP (%)",
            npemgp: "NPϵmgP (%)",
            npeogpf: "NPϵogPF (%)",
            npey: "NPϵγ (%)",
            npeyp: "NPϵγp (%)",
            npesp: "NPϵδP (%)",
            nv: "NV (%)",
            nvc: "NVc (%)",
            nc: "Nc (%)",
            nca: "Nca (%)",
            osmif: "OSmiF (%)",
            q1a: "Q1a (%)",
            q1fe: "Q1fe (%)",
            q2e: "Q2e (%)",
            q2fe: "Q2fe (%)",
            q2l: "Q2l (%)",
            q2lev: "Q2lev (%)",
            q2p: "Q2p (%)",
            q4q2e: "q4Q2e (%)",
            q4q2f: "q4Q2f (%)",
            q4q2fp: "q4Q2fp (%)",
            q4q2l: "q4Q2l (%)",
            q4q2lo: "q4Q2lo (%)",
            q4e: "q4e (%)",
            q4flo: "q4flo (%)",
            q4lo: "q4lo (%)",
            eott: "ϵOπ (%)",
            eot: "ϵOτ (%)",
            emip: "ϵmiP (%)",
            ey: "ϵγ (%)",
            eyap: "ϵγaP (%)",
            ep: "ϵρ (%)",
          },
        },
        falla_hundido_visible: {
          identify: true,
          title: "Estructura Geológica",
          kml: true,
          attributeDictionary: {
            tipo: "Tipo",
            descrip: "Descripción",
            certidumbre: "Certidumbre",
            edad_neotec: "Edad neotectónica",
          },
        },
        falla_hundido_inferida: {
          identify: true,
          title: "Estructura Geológica",
          kml: true,
          attributeDictionary: {
            tipo: "Tipo",
            descrip: "Descripción",
            certidumbre: "Certidumbre",
            edad_neotec: "Edad neotectónica",
          },
        },
        falla_inversa_visible: {
          identify: true,
          title: "Estructura Geológica",
          kml: true,
          attributeDictionary: {
            tipo: "Tipo",
            descrip: "Descripción",
            certidumbre: "Certidumbre",
            edad_neotec: "Edad neotectónica",
          },
        },
        falla_inversa_inferida: {
          identify: true,
          title: "Estructura Geológica",
          kml: true,
          attributeDictionary: {
            tipo: "Tipo",
            descrip: "Descripción",
            certidumbre: "Certidumbre",
            edad_neotec: "Edad neotectónica",
          },
        },
        falla_normal_visible: {
          identify: true,
          title: "Estructura Geológica",
          kml: true,
          attributeDictionary: {
            tipo: "Tipo",
            descrip: "Descripción",
            certidumbre: "Certidumbre",
            edad_neotec: "Edad neotectónica",
          },
        },
        falla_sin_especificar_visible: {
          identify: true,
          title: "Estructura Geológica",
          kml: true,
          attributeDictionary: {
            tipo: "Tipo",
            descrip: "Descripción",
            certidumbre: "Certidumbre",
            edad_neotec: "Edad neotectónica",
          },
        },
        falla_sin_especificar_inferida: {
          identify: true,
          title: "Estructura Geológica",
          kml: true,
          attributeDictionary: {
            tipo: "Tipo",
            descrip: "Descripción",
            certidumbre: "Certidumbre",
            edad_neotec: "Edad neotectónica",
          },
        },
        falla_sinestral: {
          identify: true,
          title: "Estructura Geológica",
          kml: true,
          attributeDictionary: {
            tipo: "Tipo",
            descrip: "Descripción",
            certidumbre: "Certidumbre",
            edad_neotec: "Edad neotectónica",
          },
        },
        falla_lineamiento_visible: {
          identify: true,
          title: "Estructura Geológica",
          kml: true,
          attributeDictionary: {
            tipo: "Tipo",
            descrip: "Descripción",
            certidumbre: "Certidumbre",
            edad_neotec: "Edad neotectónica",
          },
        },
        falla_lineamiento_inferido: {
          identify: true,
          title: "Estructura Geológica",
          kml: true,
          attributeDictionary: {
            tipo: "Tipo",
            descrip: "Descripción",
            certidumbre: "Certidumbre",
            edad_neotec: "Edad neotectónica",
          },
        },
        cizalla_geol: {
          identify: true,
          title: "Estructura Geológica",
          kml: true,
          attributeDictionary: {
            tipo: "Tipo",
            nombre: "Nombre",
          },
        },
        litologia_geol: {
          identify: true,
          title: "Estructura Geológica",
          kml: true,
          filters: {
            FPL: {
              label: "Nombre de la litologia",
              title: "Por litologia",
              cql_filter: "strStripAccents(strToUpperCase(nombre)) = strStripAccents(strToUpperCase('**'))",
            }
          },
          attributeDictionary: {
            nombre: "Nombre",
            descrip_litologica: "Descripción",
            edad_sup: "Edad superior",
            edad_inf: "Edad Inferior",
            jerarquia: "Jerarquía",
            ambiente: "Ambiente",
            unidades: "Unidades",
            sigla: "Sigla",
          },
        },
      },
    },
    "Urbanizaciones y Loteos - Ciudad de Córdoba": {
      buscaService: {
        services: [
          "getubi",
          "getpornomycuenta",
          "getUrbaLoteo"
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
        - Dirección Completa<br> \
        - Localidad<br> \
        - Titular de la urbanización o loteo <br> \
        - Nombre de la urbanización o loteo <br> \
        - Cuenta de Rentas<br> \
        - Nomenclatura Catastro Provincial<br><br> \
        Presione Enter para buscar.",
      },
      mapaBase: "OpenStreetMap",
      dataOwner: {
        name: "Municipalidad de Córdoba",
        url: "https://cordoba.gob.ar/",
      },
      layers: {
        urbanizaciones_loteos_muni: {
          identify: true,
          title: "Urbanización",

          kml: false,
          attributeDictionary: {
            "expediente_1": "Expediente N°",
            "nomenclatu": "Nomenclatura",
            "titular": "Titular",
            "nombre": "Nombre",
            "nombfant": "Nombre comercial",
            "tipoloteo": "Tipo de loteo",
            "cantlotes": "Cantidad de lotes",
            "cantviv": "Cantidad de viviendas",
            "cvt": "Certificado de vialidad técnica",
            "estado": "Estado",
            "descripcion": "Descripción",
            "autorizado": "Autorizado",
            "decresapro": "Aprobado por",
            "ord_8060": "Ordenanza 8060||Descargar Aquí||**",
            "modif_12729": "Modificatoria 12729||Descargar Aquí||**",
            "ord_13077": "Ordenanza 13077||Descargar Aquí||**",
            "ord_8606": "Ordenanza 8606||Descargar Aquí||**",
            "ord_11777": "Ordenanza 11777||Descargar Aquí||**",
            "ord_11687": "Ordenanza 11687||Descargar Aquí||**",
            "ord_12476": "Ordenanza 12476||Descargar Aquí||**",
            "modif_10330": "Modificatoria 10330||Descargar Aquí||**"
          },
        },
        parcelas_graf: {
          identify: true,
          title: "Parcela - DGC",
          service: "/parcelascatastroservice",
          field: "par_idparcela",
          kml: true,
        },

      }
    },
    "Planeamiento Urbano - Patrimonio Arquitectónico Urbano (Ords. 11190/06 y 12201/13)": {
      buscaService: {
        services: [
          "getSitioCatalogadoSingular",
          "getInmuebleCatalogado",
          "getGalerias",
          "getpornomycuenta",
          "getubi",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Nombre Sitio Catalogado Singular<br> \
      - Nombre Bien Catalogado<br> \
      - Nombre Galería<br> \
      - Nomenclatura catastral provincial<br> \
      - Número de cuenta DGR<br> \
      Presione Enter para buscar.",
      },
      dataOwner: {
        name: "Municipalidad de Córdoba",
        url: "https://cordoba.gob.ar/",
      },
      layers: {
        parcelas_capital_2: {
          identify: true,
          title: "Parcelas",
          kml: true,
          attributeDictionary: {
            Nomenclatura: "Nomenclatura",
            Tipo_Parcela: "Tipo de Parcela",
            Estado: "Estado",
            Superficie_Tierra_Urbana: "Sup. tierra urbana",
            Superficie_Mejoras: "Sup. edificada",
            Cantidad_Cuentas: "Cantidad de cuentas",
            Nro_Cuenta: "Número de cuenta",
          },
        },

        sitios_de_interes: {
          identify: true,
          title: "Sitio Catalogado Singular",
          attributeDictionary: {
            observacio: "Observación",
            nombre: "Nombre",
            tipo: "Tipo",
            identificacion: "Identificación",
            ano: "Año",
            ubicacion: "Ubicación",
            categoria: "Categoría",
            app: "App",
            mhnac: "Declaración nacional",
            mhpcial: "Declaración provincial",
            dmunicipal: "Declaración municipal",
            listado_ucc: "Listado de la UCC",
          },
        },
        circunscripciones_capital: {
          identify: false,
        },

        elemento_urbano_ambiental: {
          identify: true,
          title: "Elemento Urbano Ambiental",
          attributeDictionary: {
            nombre: "Nombre",
            tipo: "Tipo",
            anio: "Año",
            categoria: "Categoría",
            app: "App",
            mhnac: "Declaración nacional",
            mhpcial: "Declaración provincial",
            dmunicipal: "Declaración municipal",
            observacio: "Observaciones",
          },
        },
        galerias_comerciales: {
          identify: true,
          title: "Red de Galerías y Pasajes Comerciales",
          attributeDictionary: {
            identifica: "Identificación",
            ano: "Año",
            ubicacion: "Ubicación",
            nomenclatu: "Nomenclatura",
            categoria: "Categoría",
            app: "App",
          },
        },
        inmuebles_catalogados: {
          identify: true,
          title: "Bienes  Catalogados",
          attributeDictionary: {
            nc_muni: "Nomenclatura (municipal)",
            tipo: "Tipo",
            identifica: "Identificación",
            ano: "Año",
            ubicacion: "Ubicación",
            categoria: "Categoría",
            observacio: "Observaciones",
            app: "App",
            antecedent: "Antecedentes",
            listado_ucc: "Listado UCC",
            demolicion: "Demolición",
            mhnac: "Declaración nacional",
            mhpcial: "Declaración provincial",
            dmunicipal: "Declaración municipal",
          },
        },
        area_de_proteccion_patrimonial: {
          identify: true,
          title: "Área de Protección Patrimonial - APP ",
          attributeDictionary: {
            nombre_app: "Nombre",
          },
        },
        manzana_capital: {
          identify: false,
        },
        secciones: {
          identify: false,
        },

        area_arqueologica_de_riesgo: {
          identify: true,
          title: "Área Arqueológica de Riesgo - AAR",
          attributeDictionary: {
            escalas: "Escalas",
            observacio: "Descripción",
          },
        },
      },
    },
    "Villa Giardino - Planeamiento Urbano": {
      buscaService: {
        services: [
          "getubiVillaGiardino",
          "getParcelaVG",
          "getEjeCalleVGiardino",
          "getpornomycuenta",
          "GetUsoOcupaciondelSueloVG",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        /*      mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Nombre de localidad<br> \
      - Dirección completa<br> \
      - Número de Cuenta de Rentas<br> \
      - Nomenclatura Catastral<br><br> \
      Presione Enter para buscar." */
        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección completa<br> \
      - Nombre de Eje de Calle<br> \
      - Nombre de Zona<br> \
      - Nomenclatura Catastral Municipal<br> \
      - Nomenclatura Catastral Provincial<br><br> \
      Presione Enter para buscar.",
      },
      layers: {
        radios_urbanos: {
          identify: false,
        },
        ejes_de_calle_vg: {
          identify: true,
          title: "Eje de Calle",
          attributeDictionary: {
            nombre_calles: "Nombre",
            num_desde: "Altura (desde)",
            num_hasta: "Altura (hasta)",
            tipo: "Tipo",
            ancho: "Ancho",
          },
        },
        uso_ocupacion_del_suelo_vg: {
          identify: true,
          title: "Uso y Ocupación del Suelo",
          attributeDictionary: {
            usosuelo: "Zona",
            zona: "Nombre zona",
            fos: "FOS",
            fot: "FOT",
            linea_edificacion: "Línea de edificación",
            rem: "Retiro eje minimo",
            linea_fondo: "Línea de fondo",
            u_funcionales_max: "Unidades funcionales máximas",
            num_plantas_max: "Número de plantas máximo",
            frente_min_subdiv: "Frente mínimo subdividido",
            superficie_min: "Superficie mínima subdividida",
          },
        },
        cursos_de_agua_vg: {
          identify: true,
          title: "Curso de Agua (APRHI)",
          attributeDictionary: {
            ncompleto: "Nombre",
            nombrecurs: "Nombre de Curso",
            tipo: "Tipo",
            orden: "Orden",
            departamen: "Departamento",
            cuenca: "Cuenca",
            subcuenca_: "Subcuenca",
          },
        },

        manzanas_vg: {
          identify: false,
        },
        parcelas_vg: {
          identify: true,
          title: "Parcela Municipalidad",
          attributeDictionary: {
            nomenclatura: "Nomenclatura",
            parcela: "Parcela",
            nro_rentas: "Número rentas",
            estado: "Estado",
            ubicacion: "Ubicación",
            superficie: "Superficie del terreno",
            cubierto_total: "Superficie construida",
            frente_contribucion: "Frente",
            designacion_oficial: "Designación oficial",
            barrio: "Barrio",
            calle: "Calle",
            nro_puerta: "Número",
            sector: "Sector",
            zona_uso_de_suelo: "Zona uso de suelo",
          },
        },

        parcelas_graf: {
          identify: true,
          title: "Parcela - DGC",
          service: "/parcelascatastroservice",
          field: "par_idparcela",
          kml: true,
        },
      },
    },

    "Cartas IGN": {
      dataOwner: {
        name: "Instituto Geográfico Nacional",
        url: "https://www.ign.gob.ar/",
      },
      buscaService: {
        services: [
          "getubi",
          "getRadiosUrbanos",
          "getpornomycuenta",
          "getcarta_50000_consulta",
          "getcarta_100000_consulta",
          "getcarta_250000_consulta",
          "getcarta_500000_consulta",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Nombre de Localidad<br> \
      - Nomenclatura Catastral Provincial<br> \
      - Número de carta <br><br> \
      Presione Enter para buscar.",
      },
      layers: {
        departamentos: {
          identify: true,
          title: "Departamento",
          kml: true,
          attributeDictionary: {
            codigo: "Código departamental",
            nombre: "Nombre departamento",
          },
        },
        provincia: {
          identify: false,
          title: "Provincia",
        },
        radios_urbanos: {
          identify: true,
          title: "Radio Municipal",
          kml: true,
          attributeDictionary: {
            key: "Nomenclatura Radio Urbano",
            nombre: "Nombre Radio Urbano",
            url: "Ley que le da origen",
            area_ha: "Area (Ha)",
            tipo_gobierno: "Tipo de gobierno",
          },
        },

        parcelas_cartas_ign: {
          identify: true,
          title: "Parcela - DGC",
          kml: true,
          attributeDictionary: {
            Nomenclatura: "Nomenclatura",
            Tipo_Parcela: "Tipo de Parcela",
            Estado: "Estado",
            Superficie_Tierra_Urbana: "Sup. del Terreno",
            Superficie_Tierra_Rural: "Sup. del Terreno",
            Superficie_Mejoras: "Sup. edificada",
            Cantidad_Cuentas: "Cantidad de Cuentas",
          },
        },
        provincia: {
          identify: false,
          title: "Provincia",
        },
        cartas_50k: {
          identify: false,
        },
        cartas_100k: {
          identify: false,
        },
        cartas_250k: {
          identify: false,
        },
        cartas_500k: {
          identify: false,
        },
        carta_50000_consulta: {
          identify: true,
          title: "Carta 1:50.000",
          kml: true,
          attributeDictionary: {
            carac: "Número de carta",
            nombre: "Nombre",
            escala: "Escala",
            num_faja: "Faja",
            fecha_edic: "Fecha de edición",
            meridiano_: "Meridiano central",
            elipsoide: "Elipsoide",
          },
        },
        carta_100000_consulta: {
          identify: true,
          title: "Carta 1:100.000",
          kml: true,
          attributeDictionary: {
            carac: "Número de carta",
            nombre: "Nombre",
            escala: "Escala",
            num_faja: "Faja",
            fecha_edic: "Fecha de edición",
            meridiano_: "Meridiano central",
            elipsoide: "Elipsoide",
          },
        },
        carta_250000_consulta: {
          identify: true,
          title: "Carta 1:250.000",
          kml: true,
          attributeDictionary: {
            carac: "Número de carta",
            nombre: "Nombre",
            escala: "Escala",
            num_faja: "Faja",
            fecha_edic: "Fecha de edición",
            meridiano_: "Meridiano central",
            elipsoide: "Elipsoide",
          },
        },
        carta_500000_consulta: {
          identify: true,
          title: "Carta 1:500.000",
          kml: true,
          attributeDictionary: {
            carac: "Número de carta",
            nombre: "Nombre",
            escala: "Escala",
            num_faja: "Faja",
            fecha_edic: "Fecha de edición",
            meridiano_: "Meridiano central",
            elipsoide: "Elipsoide",
          },
        },
      },
    },

    "Villa Giardino - Infraestructura y Servicios": {
      buscaService: {
        services: [
          "getubiVillaGiardino",
          "getParcelaVG",
          "getEjeCalleVGiardino",
          "getpornomycuenta",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },
        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección completa<br> \
      - Nombre de Eje de Calle<br> \
      - Nomenclatura Catastral Municipal<br> \
      - Cuenta de Rentas<br> \
      - Nomenclatura Catastral Provincial<br><br> \
      Presione Enter para buscar.",

        /* mensajesbuscacartel: "Busqueda por nomenclatura o cuenta provincial, nombre del perfil o por una dirección en particular. Presione Enter para buscar." */
      },
      layers: {
        ejes_de_calle_vg: {
          identify: true,
          title: "Eje de Calle",
          attributeDictionary: {
            nombre_calles: "Nombre",
            num_desde: "Altura (desde)",
            num_hasta: "Altura (hasta)",
            tipo: "Tipo",
            ancho: "Ancho",
          },
        },
        sectores_servicios_vg: {
          identify: true,
          title: "Sector de Servicio",
          attributeDictionary: {
            sector: "Sector",
            alicuota_ajuste_edif: "Alicuotas de ajuste para edificados",
            alicuota_ajuste_bald: "Alicuotas de ajuste para baldíos",
            min_anual_edif: "Mínimo total anual para edificados",
            min_anual_bald: "Minimo total anual para baldíos",
          },
        },
        cobertura_de_agua_vg: {
          identify: true,
          title: "Cobertura de Agua",
          attributeDictionary: {
            cant_conex: "Cantidad de conexiones ",
          },
        },
        cobertura_de_gas_vg: {
          identify: true,
          title: "Cobertura de Gas",
          attributeDictionary: {
            etapa: "Etapa",
            estado: "Estado",
          },
        },
        cursos_de_agua_vg: {
          identify: true,
          title: "Curso de Agua (APRHI)",
          attributeDictionary: {
            ncompleto: "Nombre",
            nombrecurs: "Nombre de Curso",
            tipo: "Tipo",
            orden: "Orden",
            departamen: "Departamento",
            cuenca: "Cuenca",
            subcuenca_: "Subcuenca",
          },
        },

        parcelas_vg: {
          identify: true,
          title: "Parcela Municipal",
          attributeDictionary: {
            nomenclatura: "Nomenclatura",
            parcela: "Parcela",
            nro_rentas: "Número rentas",
            estado: "Estado",
            ubicacion: "Ubicación",
            superficie: "Superficie del terreno",
            cubierto_total: "Superficie construida",
            frente_contribucion: "Frente",
            designacion_oficial: "Designación oficial",
            barrio: "Barrio",
            calle: "Calle",
            nro_puerta: "Número",
            sector: "Sector",
            zona_uso_de_suelo: "Zona uso de suelo",
          },
        },

        parcelas_graf: {
          identify: true,
          title: "Parcela - DGC",
          service: "/parcelascatastroservice",
          field: "par_idparcela",
          kml: true,
        },

        manzanas_vg: {
          identify: false,
        },
        radios_urbanos: {
          identify: false,
        },
      },
    },
    "Villa Giardino - Catastro Municipal": {
      buscaService: {
        services: [
          "getubiVillaGiardino",
          "getParcelaVG",
          "getEjeCalleVGiardino",
          "getEquipVG",
          "getpornomycuenta",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección completa<br> \
      - Nombre de Eje de Calle<br> \
      - Nombre de Equipamiento<br> \
      - Nomenclatura Catastral Municipal<br> \
      - Cuenta de Rentas<br> \
      - Nomenclatura Catastral Provincial<br><br> \
      Presione Enter para buscar.",
        /* mensajesbuscacartel: "Busqueda por nomenclatura o cuenta provincial, nombre del perfil o por una dirección en particular. Presione Enter para buscar." */
      },
      layers: {
        ejes_de_calle_vg: {
          identify: true,
          title: "Eje de Calle",
          attributeDictionary: {
            nombre_calles: "Nombre",
            num_desde: "Altura (desde)",
            num_hasta: "Altura (hasta)",
            tipo: "Tipo",
            ancho: "Ancho",
          },
        },
        cursos_de_agua_vg: {
          identify: true,
          title: "Curso de Agua (APRHI)",
          kml: true,
          attributeDictionary: {
            ncompleto: "Nombre",
            tipo: "Tipo",
            orden: "Orden",
            departamen: "Departamento",
            cuenca: "Cuenca",
            subcuenca_: "Subcuenca",
          },
        },
        parcelas_vg: {
          identify: true,
          title: "Parcela - Municipalidad",
          attributeDictionary: {
            nomenclatura: "Nomenclatura",
            parcela: "Parcela",
            nro_rentas: "Número rentas",
            estado: "Estado",
            ubicacion: "Ubicación",
            superficie: "Superficie del terreno",
            cubierto_total: "Superficie construida",
            frente_contribucion: "Frente",
            designacion_oficial: "Designación oficial",
            barrio: "Barrio",
            calle: "Calle",
            nro_puerta: "Número",
            sector: "Sector",
            zona_uso_de_suelo: "Zona uso de suelo",
          },
        },

        parcelas_graf: {
          identify: true,
          title: "Parcela - DGC",
          service: "/parcelascatastroservice",
          field: "par_idparcela",
          kml: true,
        },
        radios_urbanos: {
          identify: false,
        },
        barrios_vg: {
          identify: false,
        },

        equipamientos_vg: {
          identify: false,
        },

        comercios_vg: {
          identify: false,
        },
        dimensiones_parcelas_vg: {
          identify: false,
        },
        manzanas_vg: {
          identify: false,
        },
      },
    },

    "Villa María - Planeamiento Urbano": {
      buscaService: {
        services: [
          "getubiVillaMaria",
          "getPerfilesVM",
          "getEjeCalleVM",
          "getpornomycuenta",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },
        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección completa<br> \
      - Nombre de Eje de Calle<br> \
      - Nombre de Perfil<br> \
      - Cuenta de Rentas<br> \
      - Nomenclatura Catastral Provincial<br><br> \
      Presione Enter para buscar.",

        /* mensajesbuscacartel: "Busqueda por nomenclatura o cuenta provincial, nombre del perfil o por una dirección en particular. Presione Enter para buscar." */
      },
      layers: {
        radios_urbanos: {
          identify: false,
        },
        linea_de_transporte_ferroviario_AN010: {
          identify: false,
        },
        vm_espacios_verdes: {
          identify: false,
        },
        vm_rio_ctalamochita: {
          identify: false,
        },
        manzanas_villa_maria: {
          identify: false,
        },
        vm_perfiles_constructivos: {
          identify: true,
          title: "Código de Edificación (Ord. 6402)",
          service: "/perfilesVM",
          field: "nombre",

          /*        identify:true,
        title:"Código de Edificación (Ord. 6402)",
                attributeDictionary :
        {
          "referencia":"Perfil",
          "nombre":"Nombre Perfil",
          "fuente":"Fuente"
        }  */
        },
        vm_ejes_de_calle: {
          identify: true,
          title: "Eje de Calle",
          attributeDictionary: {
            nombre_ejes: "Nombre",
            altura: "Altura (desde-hasta)",
            estado: "Estado",
          },
        },
        parcelas_villa_maria: {
          identify: true,
          title: "Parcela",
          service: "/parcelascatastroservice",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
      },
    },
    "Villa María - Infraestructura y Servicios": {
      buscaService: {
        services: ["getubiVillaMaria", "getpornomycuenta", "getEjeCalleVM"],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },
        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección completa<br> \
      - Nombre de Eje de Calle<br> \
      - Cuenta de Rentas<br> \
      - Nomenclatura Catastral Provincial<br><br> \
      Presione Enter para buscar.",

        /* mensajesbuscacartel: "Busqueda por nomenclatura, nombre calle, cuenta provincial o por una dirección en particular. Presione Enter para buscar." */
      },
      layers: {
        vm_cobertura_desagues: {
          identify: false,
        },
        linea_de_transporte_ferroviario_AN010: {
          identify: false,
        },
        vm_semaforos: {
          identify: false,
        },
        radios_urbanos: {
          identify: false,
        },
        vm_rio_ctalamochita: {
          identify: false,
        },
        vm_espacios_verdes: {
          identify: false,
        },
        manzanas_villa_maria: {
          identify: false,
        },
        vm_red_transporte_urb: {
          identify: true,
          title: "Red de Transporte Urbano",
          attributeDictionary: {
            nombre: "Línea de transporte",
          },
        },
        vm_ejes_de_calle: {
          identify: true,
          title: "Eje de Calle",
          attributeDictionary: {
            nombre_ejes: "Nombre",
            altura: "Altura (desde-hasta)",
            estado: "Estado",
          },
        },
        parcelas_villa_maria: {
          identify: true,
          title: "Parcela",
          service: "/parcelascatastroservice",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
      },
    },
    "Villa María - Catastro Municipal": {
      buscaService: {
        services: [
          "getubiVillaMaria",
          "getpornomycuenta",
          "getEjeCalleVM",
          "getEquipVM",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },
        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección completa<br> \
      - Nombre de Eje de Calle<br> \
      - Nombre de Equipamiento<br> \
      - Cuenta de Rentas \
      - Nomenclatura Catastral Provincial<br><br> \
      Presione Enter para buscar.",
      },
      layers: {
        radios_urbanos: {
          identify: false,
        },
        linea_de_transporte_ferroviario_AN010: {
          identify: false,
        },
        vm_barrios: {
          identify: false,
        },
        vm_rio_ctalamochita: {
          identify: false,
        },
        vm_espacios_verdes: {
          identify: false,
        },
        manzanas_villa_maria: {
          identify: false,
        },
        vm_ejes_de_calle: {
          identify: true,
          title: "Eje de Calle",
          attributeDictionary: {
            nombre_ejes: "Nombre",
            altura: "Altura (desde-hasta)",
            estado: "Estado",
          },
        },
        vm_equipamientos: {
          identify: true,
          title: "Equipamientos",
          attributeDictionary: {
            nombre: "Nombre",
            dependencia: "Dependencia",
          },
        },
        vm_municerca: {
          identify: true,
          title: "Municerca",
          attributeDictionary: {
            nombre: "Nombre",
            direccion: "Dirección",
            telefono: "Teléfono",
          },
        },
        parcelas_villa_maria: {
          identify: true,
          title: "Parcela",
          service: "/parcelascatastroservice",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
      },
    },
    "Villa María - Usos del Suelo Periurbano": {
      buscaService: {
        services: [
          "getubiVillaMaria",
          "getpornomycuenta",
          "getlimites_zona_periurbana_vm",
          "getEjeCalleVM",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },
        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección completa<br> \
      - Nombre de la Zona Periurbana<br> \
      - Nombre de Eje de Calle<br> \
      - Cuenta de Rentas \
      - Nomenclatura Catastral Provincial<br><br> \
      Presione Enter para buscar.",
      },
      layers: {
        radios_urbanos: {
          identify: false,
        },
        localidad_punto: {
          identify: false,
        },
        vm_barrios: {
          identify: false,
        },
        limites_zona_periurbana_vm: {
          identify: true,
          title: "Zonas Periurbanas",
          attributeDictionary: {
            zonas: "Zona",
            limites_zona_periurbana: "Limites de zona",
          },
        },
        usos_suelo_periurbano_vm: {
          identify: true,
          title: "Usos del Suelo",
          attributeDictionary: {
            zona: "Zona",
            uso: "Uso",
            nombre: "Tipo de Uso del Suelo",
            caracteristicas: "Descripción",
          },
        },
        vm_ejes_de_calle: {
          identify: true,
          title: "Eje de Calle",
          attributeDictionary: {
            nombre_ejes: "Nombre",
            altura: "Altura (desde-hasta)",
            estado: "Estado",
          },
        },

        linea_de_transporte_ferroviario_AN010: {
          identify: false,
        },
        manzanas_villa_maria: {
          identify: false,
        },
        vm_espacios_verdes: {
          identify: false,
        },
        vm_rio_ctalamochita: {
          identify: false,
        },
        parcelas_villa_maria: {
          identify: true,
          title: "Parcela",
          service: "/parcelascatastroservice",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
      },
    },
    "Contenido de Fósforo del Suelo": {
      buscaService: {
        services: [
          "getubi",
          "getLocalidadesYParajes",
          "getUCs",
          "getpornomycuenta",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },
        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Cuenta de Rentas<br>  \
      - Nomenclatura Catastral Provincial<br> \
      - Unidad Carta de Suelo<br><br> \
      Presione Enter para buscar.",
      },

      layers: {
        fosforo_2021: {
          identify: true,
          title: "Contenido de Fósforo",
          kml: true,
          attributeDictionary: {
            p: "Fósforo (ppm)",
            p_cv: "Incertidumbre de predicción (%)",
          },
        },
        cartas_suelo_unidas_2021: {
          identify: true,
          title: "Carta de Suelo (CUS)",
          attributeDictionary: {
            uc: "Unidad cartográfica",
            ip: "Índice de productividad",
            cap: "Capacidad de uso",
          },
        },
        departamentos: {
          identify: false,
        },
        radios_urbanos: {
          identify: false,
        },

        parcelas_graf: {
          identify: true,
          title: "Parcela DGC",
          service: "/parcelascatastroservice",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
      },
    },
    "pH del Suelo": {
      buscaService: {
        services: [
          "getubi",
          "getLocalidadesYParajes",
          "getUCs",
          "getpornomycuenta",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },
        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Cuenta de Rentas<br>  \
      - Nomenclatura Catastral Provincial<br> \
      - Unidad Carta de Suelo<br><br> \
      Presione Enter para buscar.",
      },

      layers: {
        ph_suelos_2021: {
          identify: true,
          title: "Nivel de pH",
          kml: true,
          attributeDictionary: {
            ph: "pH",
            ph_cv: "Incertidumbre de predicción (%)",
          },
        },
        cartas_suelo_unidas_2021: {
          identify: true,
          title: "Carta de Suelo (CUS)",
          attributeDictionary: {
            uc: "Unidad cartográfica",
            ip: "Índice de productividad",
            cap: "Capacidad de uso",
          },
        },
        departamentos: {
          identify: false,
        },
        radios_urbanos: {
          identify: false,
        },

        parcelas_graf: {
          identify: true,
          title: "Parcela DGC",
          service: "/parcelascatastroservice",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
      },
    },

    "DG Hábitat - Desarrollo Social": {
      buscaService: {
        services: [
          "getubi",
          "getLocalidadesYParajes",
          "getBarriosInf",
          "getpornomycuenta",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },
        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Cuenta de Rentas<br>  \
      - Nomenclatura Catastral Provincial<br> \
      Presione Enter para buscar.",
      },

      layers: {
        no_cache_edificado_barrios_informales: {
          identify: false,
          title: "Edificado Informal",
          kml: false,
          attributeDictionary: {
            nomb_barr: "Barrio",
            localidad: "Localidad",
            observacio: "Observación",
          },
        },
        no_cache_catastro_barrios_informales: {
          identify: true,
          title: "Barrio Informal",
          kml: false,
          attributeDictionary: {
            nombre: "Barrio",
            nacimbarri: "Creación",
            localidad: "Localidad",
            observacio: "Observación",
            tipb_cttro: "Tipo (cartografía)",
            tipb_eyc: "Tipo (Estadística y censo)",
            superficie: "Superficie",
            ersa: "Ersa",
            tamse: "Tamse",
            coniferal: "Coniferal",
            aucor: "Aucor",
            jard_est: "Jardine estatal",
            prim_est: "Primaria estatal",
            secu_est: "Secundaria estatal",
            prima_est: "Primaria est. para adultos",
            secua_est: "Secundarias est. para adultos",
            supnu_est: "Formación sup. no univ.",
            fprofa_est: "Formación profesional",
            ctro_salud: "Centro de salud",
            hospital: "Hospital",
            esp_medica: "Especialización medica",
            clinica: "Clinica",
            plazoleta: "Plazoleta",
            plaza: "Plaza",
            parque: "Parque",
            parques_ed: "Parque educativo",
            basurales: "Basural",
            gasoductos: "Gasoducto",
            lineas_at: "Energía electrica (at)",
            pavimento: "Pavimento",
            linea_ferr: "Ferrocarril",
            zinundable: "Inundación",
            zanegables: "Anegable",
            lin_ribera: "Línea de ribera",
            red_agua: "Red de agua",
            id_rnb: "id rnb",
            id_techo: "id techo",
          },
        },

        ord_8256_202107: {
          identify: true,
          title: "Ocupación del suelo - Ord. 8256",
          kml: true,
          attributeDictionary: {
            ocupacion_del_suelo: "Ocupación del Suelo",
            ord_y_perfil: "N° de Ordenanza - Perfil",
            ord_original: "Ordenanza Original",
            ord_modificatoria: "Ordenanza Modificatoria",
            art_ord: "Art. Ordenanza",
            perfil_o_zona: "Perfil/Zona",
            zona: "Zona",
            grafico: "Gráfico",
            enlace_grafico: "Enlace Gráfico",
            caracter_urbanistico: "Carácter Urbanístico",
            actividad_industrial: "Actividad Industrial",
            fos: "FOS %",
            fot: "FOT",
            retiro_frente: "Retiro Frente",
            retiro_le: "Retiro Línea Edificación",
            otros_retiros: "Otros Retiros",
            otras_disposiciones: "Otras Disposiciones",
            altura_lm: "Altura sobre Línea Municipal",
            altura_maxima: "Altura Máxima",
            altura_perim: "Altura Perímetro Libre",
            plano_a_45: "Plano a 45°",
            pisos_lm: "Máxima Cantidad de Pisos sobre Línea Municipal",
            pisos_maximos: "Máxima Cantidad de Pisos",
            n_pisos_li: "Máxima Cantidad de Pisos Perímetro Libre",
            cantidad_unidades: "Unidades Funcionales",
            observacion: "Observaciones",
            informacion_adicional: "Informacion adicional",
          },
        },
        establecimientos_2020: {
          identify: true,
          title: "Establecimiento educativo",
          kml: true,
          attributeDictionary: {
            cueanexo: "Cueanexo",
            sector: "Sector",
            dependencia: "Dependencia",
            ambito: "Ámbito",
            departamento: "Departamento",
            localidad: "Localidad",
            Calle: "Calle",
            nro: "Nro",
            modalidad: "Modalidad",
            oferta: "Oferta",
            establecimiento: "Establecimiento",
          },
        },
        efectores_nacional: {
          identify: true,
          title: "Centro de Salud Nacional",
          kml: true,
          attributeDictionary: {
            sisa: "Sisa",
            nombre: "Nombre",
            tipo: "Tipo",
            categoria: "Categoría",
            domicilio: "Domicilio",
            localidad: "Localidad",
            depto: "Departamento",
            cp: "Código Postal",
            mail_sirge: "Mail de contacto primario",
            tel_sirge: "Teléfono de contacto primario",
            mail_sigip: "Mail de contacto secundario",
            tel_sigips: "Teléfono de contacto secundario",
            financiamiento: "Financiamiento",
            dependencia: "Dependencia",
            tipologia: "TipologÍa",
          },
        },
        efectores_publicos_provincial: {
          identify: true,
          title: "Centro de Salud Provincial",
          kml: true,
          attributeDictionary: {
            sisa: "Sisa",
            nombre: "Nombre",
            tipo: "Tipo",
            categoria: "Categoría",
            domicilio: "Domicilio",
            localidad: "Localidad",
            depto: "Departamento",
            cp: "Código Postal",
            mail_sirge: "Mail de contacto primario",
            tel_sirge: "Teléfono de contacto primario",
            mail_sigip: "Mail de contacto secundario",
            tel_sigips: "Teléfono de contacto secundario",
            financiamiento: "Financiamiento",
            dependencia: "Dependencia",
            tipologia: "TipologÍa",
          },
        },
        efectores_publicos_municipales: {
          identify: true,
          title: "Centro de Salud Municipal",
          kml: true,
          attributeDictionary: {
            sisa: "Sisa",
            nombre: "Nombre",
            tipo: "Tipo",
            categoria: "Categoría",
            domicilio: "Domicilio",
            localidad: "Localidad",
            depto: "Departamento",
            cp: "Código Postal",
            mail_sirge: "Mail de contacto primario",
            tel_sirge: "Teléfono de contacto primario",
            mail_sigip: "Mail de contacto secundario",
            tel_sigips: "Teléfono de contacto secundario",
            financiamiento: "Financiamiento",
            dependencia: "Dependencia",
            tipologia: "TipologÍa",
          },
        },
        anp_defensa: {
          identify: true,
          title: "Área natural protegida",
          kml: true,
          attributeDictionary: {
            categoria: "Categoría",
            nombre: "Nombre Localidad",
            nombre_com: "Nombre Completo",
            fecha: "Fecha de Creación",
            intrumento: "Instrumento de Creación",
            nombre_1: "Nombre",
            area_ha: "Superficie en ha",
            sup_protoc: "Superficie Legal",
            fuente_shp: "Fuente",
          },
        },
        ord_8133_202107: {
          title: "Uso del Suelo (Ord 8133)",
          identify: true,
          service: "/ord_8133",
          kml: true,
          field: "id",
        },
        radios_eph: {
          identify: true,
          title: "Radio Censal",
          kml: true,
          attributeDictionary: {
            eph_codagl: "Eph Código",
            eph_aglome: "Eph Aglomerado",
            codaglo: "Código aglomerado",
            aglomerado: "Aglomerado",
            codprov: "Código provincia",
            nomprov: "Provincia",
            coddepto: "Código departamento",
            localidade: "Localidad",
            frac2010: "Fracción",
            radio2010: "Número de radio",
            tiporad: "Tipo de Radio",
            entidades: "Entidades",
          },
        },
        parcelas_graf: {
          identify: true,
          title: "Parcela DGC",
          service: "/parcelascatastroservice",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
        radios_urbanos: {
          identify: false,
          title: "Radio Municipal",
          kml: true,
          attributeDictionary: {
            key: "Nomenclatura radio municipal",
            nombre: "Nombre radio municipal",
            url: "Ley que le da origen",
            area_ha: "Area (Ha)",
            tipo_gobierno: "Tipo de gobierno",
          },
        },
      },
    },
    "Vuelos Fotogramétricos": {
      buscaService: {
        services: ["getubi", "getLocalidadesYParajes", "getpornomycuenta"],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },
        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Cuenta de Rentas<br>  \
      - Nomenclatura Catastral Provincial<br> \
      Presione Enter para buscar.",
      },

      layers: {
        radios_urbanos: {
          identify: true,
          title: "Radio Municipal",
          kml: true,
          attributeDictionary: {
            key: "Nomenclatura radio municipal",
            nombre: "Nombre radio municipal",
            url: "Ley que le da origen",
            area_ha: "Area (Ha)",
            tipo_gobierno: "Tipo de gobierno",
          },
        },
        departamentos: {
          identify: false,
        },

        parcelas_graf: {
          identify: true,
          title: "Parcela DGC",
          service: "/parcelascatastroservice",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
        Mosaico_CBAFeb2021: {
          identify: false,
        },
      },
    },
    "Predicción de Rendimiento Para Cultivos Estivales": {
      buscaService: {
        services: ["getubi", "getLocalidadesYParajes", "getpornomycuenta"],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },
        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Cuenta de Rentas<br>  \
      - Nomenclatura Catastral Provincial<br> \
      Presione Enter para buscar.",
      },

      layers: {
        radios_urbanos: {
          identify: false,
        },
        departamentos: {
          identify: false,
        },
        cuerpos_de_agua_naturales_aprhi: {
          identify: false,
        },
        cursos_de_agua_aprhi: {
          identify: true,
          title: "Curso de Agua",
          attributeDictionary: {
            ncompleto: "Nombre",
            tipo: "Tipo",
            orden: "Orden",
            departamen: "Departamento",
            cuenca: "Cuenca",
            subcuenca_: "Subcuenca",
          },
        },
        embalses_aprhi: {
          identify: false,
        },
        parcelas_graf: {
          identify: true,
          title: "Parcela DGC",
          service: "/parcelascatastroservice",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
        rendimiento_maiz: {
          identify: true,
          title: "Rendimiento maíz (qq/ha)",
          kml: true,
          attributeDictionary: {
            qq_maiz: "Maíz - qq/ha",
            porc_mz: "% Maíz",
            sup: "Superficie (ha)",
            sup_maíz: "Superficie sembrada maíz (ha)",
            nom_dpt: "Departamento",
            nom_pedania: "Pedanía",
            ip: "Índice de Productividad",
            cap: "Capacidad del suelo",
          },
        },
        rendimiento_soja: {
          identify: true,
          title: "Rendimiento soja (qq/ha)",
          kml: true,
          attributeDictionary: {
            qq_soja: "Soja - qq/ha",
            porc_sj: "% Soja",
            sup: "Superficie (ha)",
            sup_soja: "Superficie sembrada soja (ha)",
            nom_dpt: "Departamento",
            nom_pedania: "Pedanía",
            ip: "Índice de Productividad",
            cap: "Capacidad del suelo",
          },
        },
      },
    },
    "Valor de Arrendamientos Rurales 2021": {
      buscaService: {
        services: [
          "getubi",
          "getLocalidadesYParajes",
          "getRadiosUrbanos",
          "getpornomycuenta",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },
        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Cuenta de Rentas<br>  \
      - Nomenclatura Catastral Provincial<br> \
      - Nombre de Radios Municipales <br><br> \
      Presione Enter para buscar.",
      },

      dataOwner: {
        name: "IDECOR",
        url: "http://idecor.cba.gov.ar/",
      },

      layers: {
        departamentos: {
          identify: false,
        },
        radios_urbanos: {
          identify: false,
        },

        parcelas_graf: {
          identify: true,
          title: "Parcela DGC",
          service: "/parcelascatastroservice",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
        valor_arrendamiento_rural: {
          identify: true,
          title: "Valor Unitario de Arrendamientos 2021",
          kml: false,
          attributeDictionary: {
            arr_2021: "Vua (qq/ha)",
          },
        },
      },
    },
    "Riesgo Local para Incendios Forestales": {
      buscaService: {
        services: [
          "getubi",
          "getLocalidadesYParajes",
          "getRadiosUrbanos",
          "getpornomycuenta",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },
        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Cuenta de Rentas<br>  \
      - Nomenclatura Catastral Provincial<br> \
      - Nombre de Radios Municipales <br> \
      - Unidad Carta de Suelo<br><br> \
      Presione Enter para buscar.",
      },
      dataOwner: {
        name: "Secretaría de Gestión de Riesgo Climático, Catástrofes y Protección Civil",
        url: "https://www.cba.gov.ar/reparticion/ministerio-de-seguridad-2/secretaria-de-gestion-de-riesgo-climatico-y-catastrofes/",
      },

      mapaBase: "OpenStreetMap",

      layers: {
        radios_urbanos: {
          identify: false,
        },

        parcelas_graf: {
          identify: true,
          title: "Parcela DGC",
          service: "/parcelascatastroservice",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
        riesgo_incendios_20220101: {
          identify: true,
          title: "Riesgo",
          kml: false,
          attributeDictionary: {
            PALETTE_INDEX: "Nivel de riesgo",
          },
        },
        amenaza_incendios_20220101: {
          identify: true,
          title: "Amenaza",
          kml: false,
          attributeDictionary: {
            GRAY_INDEX: "Nivel de amenaza",
          },
        },
        vulnerabilidad_incendios_20220101: {
          identify: true,
          title: "Vulnerabilidad",
          kml: false,
          attributeDictionary: {
            PALETTE_INDEX: "Nivel de vulnerabilidad",
          },
        },
      },
    },
    "Variables Granulométricas": {
      buscaService: {
        services: [
          "getubi",
          "getLocalidadesYParajes",
          "getUCs",
          "getpornomycuenta",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },
        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Cuenta de Rentas<br>  \
      - Nomenclatura Catastral Provincial<br> \
      - Unidad Carta de Suelo<br><br> \
      Presione Enter para buscar.",
      },

      layers: {
        departamentos: {
          identify: false,
        },
        radios_urbanos: {
          identify: false,
        },

        parcelas_graf: {
          identify: true,
          title: "Parcela DGC",
          service: "/parcelascatastroservice",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
        arena_2021: {
          identify: true,
          title: "Arena",
          kml: true,
          attributeDictionary: {
            arena: "Arena (%)",
            arena_cv: "Incertidumbre de predicción (%)",
          },
        },
        limo_2021: {
          identify: true,
          title: "Limo",
          kml: true,
          attributeDictionary: {
            limo: "Limo (%)",
            limo_cv: "Incertidumbre de predicción (%)",
          },
        },
        arcilla_2021: {
          identify: true,
          title: "Arcilla",
          kml: true,
          attributeDictionary: {
            arcilla: "Arcilla (%)",
            arcilla_cv: "Incertidumbre de predicción (%)",
          },
        },
        cartas_suelo_unidas_2021: {
          identify: true,
          title: "Carta de Suelo (CUS)",
          attributeDictionary: {
            uc: "Unidad cartográfica",
            ip: "Índice de productividad",
            cap: "Capacidad de uso",
          },
        },
      },
    },
    "Cosquín - Planeamiento Urbano": {
      buscaService: {
        services: ["getubiCosquin", "getCalleCosquin", "getParcelasCosquin"],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección completa<br> \
      - Eje de calle<br> \
      - Nomenclatura Catastral Municipal<br><br> \
      Presione Enter para buscar.",
      },
      layers: {
        radios_urbanos: {
          identify: false,
        },
        cursos_de_agua_aprhi: {
          identify: true,
          title: "Curso de Agua",
          attributeDictionary: {
            ncompleto: "Nombre",
            tipo: "Tipo",
            orden: "Orden",
            departamen: "Departamento",
            cuenca: "Cuenca",
            subcuenca_: "Subcuenca",
          },
        },
        linea_de_transporte_ferroviario_AN010: {
          identify: false,
        },
        ejes_de_calles_cosquin: {
          identify: true,
          title: "Eje de Calle",
          attributeDictionary: {
            r_f_add: "Altura (desde)",
            l_t_add: "Altura (hasta)",
            nombre: "Nombre",
            barrio: "Barrio",
            tipo: "Tipo",
          },
        },
        zonificacion_codigo_edificacion: {
          identify: true,
          title: "Zonificación Código de Edificación",
          attributeDictionary: {
            nombre: "Zona",
            designacion: "Designación ",
            fot: "FOT",
            fos_: "FOS",
            retiro_espacio_verde_: "Retiro espacios verdes",
            retiro_medianero_minimo: "Retiro medianero mínimo",
            preponderante: "Uso preponderante",
            permitido: "Uso permitido",
            no_autorizado: "Uso no autorizado",
            frente_minimo_m: "Frente mínimo (m)",
            superficie_minima_m2: "Superficie mínima (m2)",
          },
        },

        manzanas_cosquin: {
          identify: true,
          title: "Manzanas - Municipalidad",
          service: "/manzanascosquin",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "id_manzana",
          kml: true,
        },

        parcelas_202110: {
          identify: true,
          title: "Parcela - Municipalidad",
          attributeDictionary: {
            parcelas: "Nomenclatura parcela",
            etiqueta_: "Número de parcela",
            lote_oficial: "Lote oficial",
            zona_tarifaria: "Zona tarifaria",
            nomenclatura_manzana: "Nomenclatura manzana",
            cuenta_muni: "Cuenta municipal",
          },
          kml: true,
        },

        parcelas_graf: {
          identify: true,
          title: "Parcela DGC",
          service: "/parcelascatastroservice",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
      },
    },
    "Cosquín - Infraestructura y Servicios": {
      buscaService: {
        services: ["getubiCosquin", "getCalleCosquin", "getParcelasCosquin"],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección completa<br> \
      - Eje de calle<br> \
      - Nomenclatura Catastral Municipal<br><br> \
      Presione Enter para buscar.",
      },
      layers: {
        radios_urbanos: {
          identify: false,
        },
        linea_de_transporte_ferroviario_AN010: {
          identify: false,
        },
        ejes_de_calles_cosquin: {
          identify: true,
          title: "Eje de Calle",
          attributeDictionary: {
            r_f_add: "Altura (desde)",
            l_t_add: "Altura (hasta)",
            nombre: "Nombre",
            barrio: "Barrio",
            tipo: "Tipo",
          },
          kml: true,
        },
        puentes: {
          identify: false,
        },
        red_cobertura_de_gas: {
          identify: true,
          title: "Red de Cobertura de Gas",
          attributeDictionary: {
            diametro: "Diámetro",
            fecha_habitacion: "Fecha de habilitación",
            observacion: "Observaciones",
          },
          kml: true,
        },
        gestion_de_calles_202112: {
          identify: true,
          title: "Gestión de Calles",
          attributeDictionary: {
            caracteristica: "Estado",
            estado: "Materialización",
            observacio: "Observaciones",
          },
          kml: true,
        },
        cursos_de_agua_aprhi: {
          identify: true,
          title: "Curso de Agua",
          attributeDictionary: {
            ncompleto: "Nombre",
            tipo: "Tipo",
            orden: "Orden",
            departamen: "Departamento",
            cuenca: "Cuenca",
            subcuenca_: "Subcuenca",
          },
        },
        manzanas_cosquin: {
          identify: true,
          title: "Manzanas - Municipalidad",
          service: "/manzanascosquin",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "id_manzana",
          kml: true,
        },
        parcelas_202110: {
          identify: true,
          title: "Parcela - Municipalidad",
          attributeDictionary: {
            parcelas: "Nomenclatura parcela",
            etiqueta_: "Número de parcela",
            lote_oficial: "Lote oficial",
            zona_tarifaria: "Zona tarifaria",
            nomenclatura_manzana: "Nomenclatura manzana",
            cuenta_muni: "Cuenta municipal",
          },
          kml: true,
        },
        parcelas_graf: {
          identify: true,
          title: "Parcela DGC",
          service: "/parcelascatastroservice",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
      },
    },
    "Cosquín - Catastro Municipal": {
      buscaService: {
        services: [
          "getubiCosquin",
          "getCalleCosquin",
          "getParcelasCosquin",
          "getBarrioCosquin",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección completa<br> \
      - Eje de calle<br> \
      - Nomenclatura Catastral Municipal<br><br> \
      - Nombre de un Barrio<br> \
      Presione Enter para buscar.",
      },
      layers: {
        radios_urbanos: {
          identify: false,
        },
        barrios_cosquin: {
          identify: false,
        },
        esquinas_conmemorativas: {
          identify: false,
        },
        hitos: {
          identify: false,
        },
        cota_punto: {
          identify: false,
        },

        linea_de_transporte_ferroviario_AN010: {
          identify: false,
        },

        ejes_de_calles_cosquin: {
          identify: true,
          title: "Eje de Calle",
          attributeDictionary: {
            r_f_add: "Altura (desde)",
            l_t_add: "Altura (hasta)",
            nombre: "Nombre",
            barrio: "Barrio",
            tipo: "Tipo",
          },
          kml: true,
        },
        equipamiento_de_salud: {
          identify: true,
          title: "Equipamiento de Salud",
          attributeDictionary: {
            nombre: "Nombre",
            categoria: "Categoría",
            observ: "Administración",
          },
          kml: true,
        },
        equipamiento_educativo: {
          identify: true,
          title: "Equipamiento Educativo",
          attributeDictionary: {
            nombre: "Nombre",
            administracion: "Administración",
            nivel: "Nivel",
            observ: "Tipo",
          },
          kml: true,
        },
        equipamiento_institucional: {
          identify: true,
          title: "Equipamiento Institucional",
          attributeDictionary: {
            nombre: "Nombre",
            jurisdiccion: "Administración",
          },
          kml: true,
        },
        cursos_de_agua_aprhi: {
          identify: true,
          title: "Curso de Agua",
          attributeDictionary: {
            ncompleto: "Nombre",
            tipo: "Tipo",
            orden: "Orden",
            departamen: "Departamento",
            cuenca: "Cuenca",
            subcuenca_: "Subcuenca",
          },
        },
        manzanas_cosquin: {
          identify: true,
          title: "Manzanas - Municipalidad",
          service: "/manzanascosquin",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "id_manzana",
          kml: true,
        },
        parcelas_202207: {
          identify: true,
          title: "Parcela - Municipalidad",
          attributeDictionary: {
            parcelas: "Nomenclatura parcela",
            etiqueta_: "Número de parcela",
            lote_oficial: "Lote oficial",
            zona_tarifaria: "Zona tarifaria",
            nomenclatura_manzana: "Nomenclatura manzana",
            cuenta_muni: "Cuenta municipal",
            barrio: "Barrio"
          },
          kml: true,
        },

        parcelas_graf: {
          identify: true,
          title: "Parcela",
          service: "/parcelascatastroservice",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
      },
    },

    "Áreas Naturales Protegidas y Regiones Naturales": {
      buscaService: {
        services: [
          "getubi",
          "getLocalidadesYParajes",
          "getRegionesNaturales",
          "getAreasNaturalesProv",
          "getAreasNaturalesNac",
          "getpornomycuenta",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },
        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Nombre de Regiones Naturales <br> \
      - Nombre de Areas Naturales Provinciales<br> \
      - Nombre de Areas Naturales Nacionales<br> \
      - Cuenta de Rentas \
      - Nomenclatura Catastral Provincial<br><br> \
      Presione Enter para buscar.",
      },
      dataOwner: {
        name: "Secretaría de Ambiente",
        url: "https://secretariadeambiente.cba.gov.ar/",
      },
      layers: {
        parcelas_graf: {
          identify: true,
          title: "Parcela",
          service: "/parcelascatastroservice",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
        departamentos: {
          identify: false,
        },
        radios_urbanos: {
          identify: false,
        },
        regiones_naturales: {
          identify: false,
        },
        anp_rn_2020: {
          identify: true,
          title: "Parques y Reservas Nacionales",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre",
            creacion: "Instrumento de Creación",
            ten_tierra: "Tenencia de Tierra ",
            jurisdiccion: "Jurisdicción",
            categoria: "Categoría",
            fuente: "Fuente ",
            sup_ha_shp: "Superficie en ha",
            sup_ley: "Superficie Legal",
          },
        },
        anp_defensa: {
          identify: true,
          title: "Reservas Naturales de la Defensa",
          kml: true,
          attributeDictionary: {
            categoria: "Categoría",
            nombre: "Nombre Localidad",
            nombre_com: "Nombre Completo",
            fecha: "Fecha de Creación",
            intrumento: "Instrumento de Creación",
            nombre_1: "Nombre",
            area_ha: "Superficie en ha",
            sup_protoc: "Superficie Legal",
            fuente_shp: "Fuente",
          },
        },
        anp_provinciales: {
          identify: true,
          title: "Áreas Naturales Provinciales",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre",
            instr_crea: "Instrumento de Creación",
            fecha_crea: "Fecha de Creación",
            area_ha: "Superficie en ha",
            superf_leg: "Superficie Legal",
            fuente_shp: "Fuente",
          },
        },
        anp_corredores_biogeograficos: {
          identify: true,
          title: "Corredores Biogeográficos",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre",
            instr_crea: "Instrumento de Creación",
            fecha_crea: "Fecha de Creación",
            area_ha: "Superficie en ha",
            superf_leg: "Superficie Legal",
            fuente_shp: "Fuente",
          },
        },
        reserva_arqueologica: {
          identify: true,
          title: "Reservas Arquelógicas",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre",
            creacion: "Instrumento de Creación",
            ten_tierra: "Tenencia de Tierra",
            jurisdiccion: "Jurisdicción",
            fecha_crea: "Fecha de Creación",
            area_ha: "Superficie en ha",
          },
        },
      },
    },
    "Buenas Prácticas Agropecuarias 2019-2020": {
      buscaService: {
        services: [
          "getubi",
          "getRadiosUrbanos",
          "getBPA2019",
          "getpornomycuenta",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Nombre de Radios Municipales <br> \
      - Nombre de Explotación<br> \
      - Cuenta de Rentas \
      - Nomenclatura Catastral Provincial<br><br> \
      Presione Enter para buscar.",
      },
      layers: {
        parcelas_graf: {
          identify: true,
          title: "Parcela",
          service: "/parcelascatastroservice",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
        departamentos: {
          identify: false,
        },
        radios_urbanos: {
          identify: false,
        },
        bpa2020: {
          identify: true,
          title: "BPA 2020",
          kml: true,
          attributeDictionary: {
            n_explotacion: "Explotación",
            cuenta: "Cuenta",
            superficie: "Superficie",
            superficie_bpa: "Superficie de BPA",
            tecnificacion_ganadera: "Tecnificación Ganadera",
            sistematizacion_con_terrazas: "Sistematización con Terrazas",
            rotacion_gramineas_y_cultivos_de_servicios: "Rotación Gramineas y Cultivos de Servicios",
            pasturas_implantadas: "Pasturas Implantadas",
            participacion_grupos_asociativos: "Participación Grupos Asociativos",
            nutricion_de_suelos: "Nutricion de Suelos",
            manejo_cultivos_intensivos: "Manejo de Cultivos Intensivos",
            certificaciones: "Certificaciones",
            capacitacion: "Capacitación",
            ag_tech: "Ag Tech",
            agricultura_de_precision: "Agricultura de Precisión",
            responsabilidad_social: "Responsabilidad Social",
            persona: "Eje Persona",
            planeta: "Eje Planeta",
            prosperidad: "Eje Prosperidad",
            total: "Total BPA",
          },
        },
        bpa_2020_persona: {
          identify: true,
          title: "BPA 2020 - Eje Personas",
          kml: true,
          attributeDictionary: {
            n_explotacion: "Explotación",
            cuenta: "Cuenta",
            superficie: "Superficie",
            superficie_bpa: "Superficie de BPA",
            tecnificacion_ganadera: "Tecnificación Ganadera",
            sistematizacion_con_terrazas: "Sistematización con Terrazas",
            rotacion_gramineas_y_cultivos_de_servicios: "Rotación Gramineas y Cultivos de Servicios",
            pasturas_implantadas: "Pasturas Implantadas",
            participacion_grupos_asociativos: "Participación Grupos Asociativos",
            nutricion_de_suelos: "Nutricion de Suelos",
            manejo_cultivos_intensivos: "Manejo de Cultivos Intensivos",
            certificaciones: "Certificaciones",
            capacitacion: "Capacitación",
            ag_tech: "Ag Tech",
            agricultura_de_precision: "Agricultura de Precisión",
            responsabilidad_social: "Responsabilidad Social",
            persona: "Eje Persona",
            planeta: "Eje Planeta",
            prosperidad: "Eje Prosperidad",
            total: "Total BPA ",
          },
        },
        bpa_2020_planeta: {
          identify: true,
          title: "BPA 2020 - Eje Planeta",
          kml: true,
          attributeDictionary: {
            n_explotacion: "Explotación",
            cuenta: "Cuenta",
            superficie: "Superficie",
            superficie_bpa: "Superficie de BPA",
            tecnificacion_ganadera: "Tecnificación Ganadera",
            sistematizacion_con_terrazas: "Sistematización con Terrazas",
            rotacion_gramineas_y_cultivos_de_servicios: "Rotación Gramineas y Cultivos de Servicios",
            pasturas_implantadas: "Pasturas Implantadas",
            participacion_grupos_asociativos: "Participación Grupos Asociativos",
            nutricion_de_suelos: "Nutricion de Suelos",
            manejo_cultivos_intensivos: "Manejo de Cultivos Intensivos",
            certificaciones: "Certificaciones",
            capacitacion: "Capacitación",
            ag_tech: "Ag Tech",
            agricultura_de_precision: "Agricultura de Precisión",
            responsabilidad_social: "Responsabilidad Social",
            persona: "Eje Persona",
            planeta: "Eje Planeta",
            prosperidad: "Eje Prosperidad",
            total: "Total BPA ",
          },
        },
        bpa_2020_prosperidad: {
          identify: true,
          title: "BPA 2020 - Eje Prosperidad",
          kml: true,
          attributeDictionary: {
            n_explotacion: "Explotación",
            cuenta: "Cuenta",
            superficie: "Superficie",
            superficie_bpa: "Superficie de BPA",
            tecnificacion_ganadera: "Tecnificación Ganadera",
            sistematizacion_con_terrazas: "Sistematización con Terrazas",
            rotacion_gramineas_y_cultivos_de_servicios: "Rotación Gramineas y Cultivos de Servicios",
            pasturas_implantadas: "Pasturas Implantadas",
            participacion_grupos_asociativos: "Participación Grupos Asociativos",
            nutricion_de_suelos: "Nutricion de Suelos",
            manejo_cultivos_intensivos: "Manejo de Cultivos Intensivos",
            certificaciones: "Certificaciones",
            capacitacion: "Capacitación",
            ag_tech: "Ag Tech",
            agricultura_de_precision: "Agricultura de Precisión",
            responsabilidad_social: "Responsabilidad Social",
            persona: "Eje Persona",
            planeta: "Eje Planeta",
            prosperidad: "Eje Prosperidad",
            total: "Total BPA ",
          },
        },
        bpa2019: {
          identify: true,
          title: "BPA 2019",
          kml: true,
          attributeDictionary: {
            n_explotacion: "Explotación",
            cuenta: "Cuenta",
            superficie: "Superficie",
            superficie_bpa: "Superficie de BPA",
            tecnificacion: "Tecnificación",
            sistematizacion_con_terrazas: "Sistematización con Terrazas",
            rotacion_gramineas_y_cultivos_de_servicios: "Rotación Gramineas y Cultivos de Servicios",
            plan_pecuario: "Plan Pecuario",
            pasturas_implantadas: "Pasturas Implantadas",
            participacion_grupos_asociativos: "Participación Grupos Asociativos",
            nutricion_de_suelos: "Nutricion de Suelos",
            manejo_ganaderia_integrada: "Manejo de Ganadería Integrada ",
            manejo_cultivos_intensivos: "Manejo de Cultivos Intensivos",
            indic_agro: "Indicagro",
            "gestion _de_riesgo": "Gestión de Riesgo",
            certificaciones: "Certificaciones",
            capacitacion: "Capacitación",
            ag_tech: "Ag Tech",
            agricultura_de_precision: "Agricultura de Precisión",
            responsabilidad_social: "Responsabilidad Social",
            persona: "Eje Persona",
            planeta: "Eje Planeta",
            prosperidad: "Eje Prosperidad",
            total: "Total BPA ",
          },
        },
        bpa_2019_persona: {
          identify: true,
          title: "BPA 2019 - Eje Personas",
          kml: true,
          attributeDictionary: {
            n_explotacion: "Explotación",
            cuenta: "Cuenta",
            superficie: "Superficie",
            superficie_bpa: "Superficie de BPA",
            tecnificacion: "Tecnificación",
            sistematizacion_con_terrazas: "Sistematización con Terrazas",
            rotacion_gramineas_y_cultivos_de_servicios: "Rotación Gramineas y Cultivos de Servicios",
            plan_pecuario: "Plan Pecuario",
            pasturas_implantadas: "Pasturas Implantadas",
            participacion_grupos_asociativos: "Participación Grupos Asociativos",
            nutricion_de_suelos: "Nutricion de Suelos",
            manejo_ganaderia_integrada: "Manejo de Ganadería Integrada ",
            manejo_cultivos_intensivos: "Manejo de Cultivos Intensivos",
            indic_agro: "Indicagro",
            "gestion _de_riesgo": "Gestión de Riesgo",
            certificaciones: "Certificaciones",
            capacitacion: "Capacitación",
            ag_tech: "Ag Tech",
            agricultura_de_precision: "Agricultura de Precisión",
            responsabilidad_social: "Responsabilidad Social",
            persona: "Eje Persona",
            planeta: "Eje Planeta",
            prosperidad: "Eje Prosperidad",
            total: "Total BPA ",
          },
        },
        bpa_2019_planeta: {
          identify: true,
          title: "BPA 2019 - Eje Planeta",
          kml: true,
          attributeDictionary: {
            n_explotacion: "Explotación",
            cuenta: "Cuenta",
            superficie: "Superficie",
            superficie_bpa: "Superficie de BPA",
            tecnificacion: "Tecnificación",
            sistematizacion_con_terrazas: "Sistematización con Terrazas",
            rotacion_gramineas_y_cultivos_de_servicios: "Rotación Gramineas y Cultivos de Servicios",
            plan_pecuario: "Plan Pecuario",
            pasturas_implantadas: "Pasturas Implantadas",
            participacion_grupos_asociativos: "Participación Grupos Asociativos",
            nutricion_de_suelos: "Nutricion de Suelos",
            manejo_ganaderia_integrada: "Manejo de Ganadería Integrada ",
            manejo_cultivos_intensivos: "Manejo de Cultivos Intensivos",
            indic_agro: "Indicagro",
            "gestion _de_riesgo": "Gestión de Riesgo",
            certificaciones: "Certificaciones",
            capacitacion: "Capacitación",
            ag_tech: "Ag Tech",
            agricultura_de_precision: "Agricultura de Precisión",
            responsabilidad_social: "Responsabilidad Social",
            persona: "Eje Persona",
            planeta: "Eje Planeta",
            prosperidad: "Eje Prosperidad",
            total: "Total BPA ",
          },
        },
        bpa_2019_prosperidad: {
          identify: true,
          title: "BPA 2019 - Eje Prosperidad",
          kml: true,
          attributeDictionary: {
            n_explotacion: "Explotación",
            cuenta: "Cuenta",
            superficie: "Superficie",
            superficie_bpa: "Superficie de BPA",
            tecnificacion: "Tecnificación",
            sistematizacion_con_terrazas: "Sistematización con Terrazas",
            rotacion_gramineas_y_cultivos_de_servicios: "Rotación Gramineas y Cultivos de Servicios",
            plan_pecuario: "Plan Pecuario",
            pasturas_implantadas: "Pasturas Implantadas",
            participacion_grupos_asociativos: "Participación Grupos Asociativos",
            nutricion_de_suelos: "Nutricion de Suelos",
            manejo_ganaderia_integrada: "Manejo de Ganadería Integrada ",
            manejo_cultivos_intensivos: "Manejo de Cultivos Intensivos",
            indic_agro: "Indicagro",
            "gestion _de_riesgo": "Gestión de Riesgo",
            certificaciones: "Certificaciones",
            capacitacion: "Capacitación",
            ag_tech: "Ag Tech",
            agricultura_de_precision: "Agricultura de Precisión",
            responsabilidad_social: "Responsabilidad Social",
            persona: "Eje Persona",
            planeta: "Eje Planeta",
            prosperidad: "Eje Prosperidad",
            total: "Total BPA ",
          },
        },
      },
    },
    "Variables utilizadas en el estudio de Valores de la Tierra Urbana 2020": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        vut_parcela_2020: {
          identify: true,
          title: "Valor urbano 2020",
          service: "/valoresurbanos2020",
          //service:"/newdataserv",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "nomenclatura",
          kml: false,
        },
        parcelas_graf: {
          identify: true,
          title: "Parcela",
          service: "/getvariablesurbanas2020",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
        cluster_urbanos: {
          identify: true,
          title: "Cluster Urbanos",
          kml: true,
          attributeDictionary: {
            id: "id",
            zona: "Zona",
          },
        },
        datos_mercado_mapa_2020: {
          identify: true,
          title: "Datos de mercado ($/m²)",
          kml: true,
          attributeDictionary: {
            id: "id",
            vut: "Valor Unitario de la tierra ($/m2)",
            p_origen: "Fuente",
            tipodevalor: "Tipo de valor",
            tipodeinmueble: "Tipo de inmueble",
            valor: "Valor total",
            moneda: "Tipo de moneda",
            fechavalor: "Fecha del valor",
            situacionjuridica: "Situacion Juridica",
            suploteurbano: "Superficie de lote",
            supconstruida: "Superficie edificada",
            frente: "Frente",
            forma: "Forma",
            ubicacioncuadra: "Ubicación de la cuadra",
            topografia: "Topografia",
          },
        },
        zonas_perfil_inmobiliario_2020: {
          identify: false,
        },
        red_vial_2020: {
          identify: false,
        },
        espacio_verde: {
          identify: false,
        },
        cursos_de_agua_aprhi: {
          identify: false,
        },
        manzanas: {
          identify: false,
        },
        radios_urbanos: {
          identify: false,
        },
      },
    },
    "Variables utilizadas en el estudio de Valores de la Tierra Rural 2020": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        parcelas_graf: {
          identify: true,
          title: "Parcela",
          service: "/newdataserv",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
        cartas_suelo_unidas_2020: {
          identify: true,
          title: "Carta de Suelo",
          kml: true,
          attributeDictionary: {
            uc: "Unidad Cartográfica",
            ip: "Índice de productividad",
            cap: "Capacidad de uso",
          },
        },
        datos_mercado_rural_2020: {
          identify: true,
          title: "Datos de Mercado Rural ($/ha)",
          kml: true,
          attributeDictionary: {
            id: "id",
            valor_mercado: "Valor unitario de la tierra ($/Ha)",
            actividad: "Actividad principal",
            fuente: "Fuente",
            fecha_valor: "Fecha de valor",
          },
        },
        datos_mercado_peri_2020: {
          identify: true,
          title: "Datos de Mercado Sector Periurbano y Usos Especiales ($/ha)",
          kml: true,
          attributeDictionary: {
            id: "id",
            valor_mercado: "Valor unitario de la tierra ($/Ha)",
            actividad: "Actividad principal",
            fuente: "Fuente",
            fecha_valor: "Fecha de valor",
          },
        },
        grilla_variables: {
          identify: true,
          title: "Datos de Mercado Sector Periurbano y Usos Especiales ($/ha)",
          kml: true,
          attributeDictionary: {
            id: "id",
            id_2018: "id 2018 (Grilla 2018)",
            peri_2020: "Pertenencia sector periurbano y usos especiales",
            n2_cob11: "Urbano compacidad alta",
            n2_cob12: "Urbano compacidad media",
            n2_cob13: "Urbano compacidad baja",
            n2_cob14: "Urbano compacidad muy baja o Abierto",
            n2_cob1: "Monte",
            n2_cob2: "Arbustales y matorrales",
            cat_otbn3: "Superf. celda Categ. Amarilla (OTBN)",
            cat_otbn4: "Superf. celda Categ. Roja (OTBN)",
            nat_prot: "Pertenencia a Área Natural Protegida",
            d_vialpav: "Distancia a vial pavimentada",
            parce_cant: "Cantidad de parcelas (entorno 5km)",
            parce_medi: "Superf. media de parcela en entorno (5 km) ",
            perc_urb: "Superf. de parcelas de tipo urbana",
            cant_oferta_inm: "Cantidad de oferta inmobiliaria",
            cant_turi_omi: "Cantidad datos turísticos",
            vut_2019_min: "VUT 2019 mínimo",
            vut_2019_max: "VUT 2019 máximo ",
            vut_2019_median: "VUT 2019 mediana",
            vut_2020_min: "VUT 2020 mínimo",
            vut_2020_max: "VUT 2020 máximo ",
            vut_2020_median: "VUT 2020 mediana",
            resg_agrop: "Pertenencia Área Resguardo Ambiental",
            rec_3median: "Mediana de % de años con recurrencia de agua (2010-2018)",
            d_redelect: "Distancia a via eléctrica",
            n2_cob16: "Superf. cultivo anual de secano",
            n2_cob17: "Superf. cultivos Irrigados",
            n2_cob18: "Superf. pasturas implantadas",
            n2_cob19: "Superf. pasturas naturales manejadas",
          },
        },
        analisis_shlomo: {
          identify: false,
        },
        mapa_g_segm_q_0809: {
          identify: false,
        },
        Rec_anual_1_2020: {
          identify: false,
        },
        Rec_anual_2_2020: {
          identify: false,
        },
        Rec_anual_3_2020: {
          identify: false,
        },
        Rec_anual_14_18: {
          identify: false,
        },
        variables_consulta_rural2019: {
          identify: false,
        },
        grilla_valor_rural_2020: {
          identify: false,
        },
        departamentos: {
          identify: false,
        },
        pedania: {
          identify: false,
        },
      },
    },
    "Cobertura y Uso del Suelo - Periurbano Gran Córdoba 2019": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        parcelas_peri_cba: {
          identify: true,
          title: "Parcela Periurbano de Córdoba",
          service: "/parcelascatastroservice",
          //service:"/newdataserv",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
        radios_urbanos_mcup: {
          identify: false,
        },
        MCUP_CORDOBA: {
          identify: true,
          service: "/cobertura_peri",
          field: "GRAY_INDEX",
          kml: false,
          title: "Cobertura y Uso del Suelo - Periurbano de Córdoba 2019-02-19",
        },
      },
    },
    "Valor de la Tierra Rural 2021": {
      dataOwner: {
        name: "Dirección General de Catastro",
        url: "https://www.catastrocordoba.gob.ar/",
      },
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        parcelas_graf: {
          identify: true,
          title: "Parcela",
          service: "/parcelascatastroservice",
          //service:"/newdataserv",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
        radios_urbanos: {
          identify: false,
        },

        departamentos: {
          identify: false,
        },
        grilla_vur_2021_: {
          identify: false,
          title: "Valor Tierra Urbana 2019",
        },
        pedania: {
          identify: false,
          title: "Valor Tierra Urbana 2019",
        },
        vur_2021: {
          identify: true,
          title: "Valor Tierra Rural ($/ha)",
          attributeDictionary: {
            vur_2021: "Valor Unitario de Tierra ($/ha)",
          },
        },
      },
    },

    "Valor de la Tierra Rural 2020": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        parcelas_graf: {
          identify: true,
          title: "Parcela",
          service: "/parcelascatastroservice",
          //service:"/newdataserv",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
        radios_urbanos: {
          identify: false,
        },
        departamentos: {
          identify: false,
        },
        grilla_valor_rural_2020: {
          identify: false,
          title: "grilla_valor_rural_2020",
        },
        pedania: {
          identify: false,
          title: "pedania",
        },
        vur_2020: {
          identify: true,
          title: "Valor Tierra Rural ($/ha)",
          attributeDictionary: {
            vur_2020: "Valor Unitario de Tierra ($/ha)",
          },
        },
      },
    },
    "Valor de la Tierra Urbana 2020": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        /* "vut_parcela_2020":
      {
        attributeDictionary : {
          "vut":"Valor Unitario de la Tierra",
          "nomenclatura":"Nomenclatura",
          "numero_parcela":"Número de Parcela",
          "tipo_parcela":"Tipo de Parcela",
          "tipo_valuacion":"Tipo de Valuación",
          "estado":"Estado",
          "superficie_terreno":"Sup. del Terreno",
          "superficie_mejoras":"Sup. Edificada"
        }  ,
        identify:true,
        title:"Valuación urbana 2020 por parcela",
        kml:true
      }, */
        vut_parcela_2020: {
          identify: true,
          title: "Valor urbano 2020",
          service: "/valoresurbanos2020",
          //service:"/newdataserv",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "nomenclatura",
          kml: false,
        },
        parcelas_graf: {
          identify: true,
          title: "Parcela",
          service: "/parcelascatastroservice",
          //service:"/newdataserv",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
        radios_urbanos: {
          identify: false,
        },

        departamentos: {
          identify: false,
          title: "Carta Valores Urbanos 2019",
          service: "/cuadriculaurbana",
          field: "nombre_hoja",
          kml: false,
        },
        circunscripciones: {
          identify: false,
          title: "Valor Tierra Urbana 2019",
        },
        secciones: {
          identify: false,
          title: "Valor Tierra Urbana 2019",
        },
        manzana: {
          identify: false,
          title: "Valor Tierra Urbana 2019",
        },
      },
    },
    "Valor de la Tierra Urbana 2021": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      dataOwner: {
        name: "Dirección General de Catastro",
        url: "https://www.catastrocordoba.gob.ar/",
      },
      layers: {
        /* "vut_parcela_2020":
      {
        attributeDictionary : {
          "vut":"Valor Unitario de la Tierra",
          "nomenclatura":"Nomenclatura",
          "numero_parcela":"Número de Parcela",
          "tipo_parcela":"Tipo de Parcela",
          "tipo_valuacion":"Tipo de Valuación",
          "estado":"Estado",
          "superficie_terreno":"Sup. del Terreno",
          "superficie_mejoras":"Sup. Edificada"
        }  ,
        identify:true,
        title:"Valuación urbana 2020 por parcela",
        kml:true
      }, */
        vut_2021_: {
          identify: true,
          title: "Valor urbano 2021",
          service: "/valoresurbanos2021",
          //service:"/newdataserv",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "nomenclatura",
          kml: false,
        },
        parcelas_graf: {
          identify: true,
          title: "Parcela",
          service: "/parcelascatastroservice",
          //service:"/newdataserv",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
        radios_urbanos: {
          identify: false,
        },

        departamentos: {
          identify: false,
        },
        circunscripciones: {
          identify: false
        },
        secciones: {
          identify: false
        },
        manzana: {
          identify: false
        },
      },
    },
    "Villa Carlos Paz - Catastro Municipal": {
      dataOwner: {
        name: "Municipalidad de Villa Carlos Paz",
        url: "https://villacarlospaz.gov.ar/"
      },
      buscaService: {
        services: ["getubiVCP", "getparcelavcppornom", "getpornomycuenta"],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Cuenta de Rentas \
      - Nomenclatura Catastral Provincial<br><br> \
      Presione Enter para buscar.",
      },
      layers: {
        barrios: {
          identify: false,
          title: "Barrios",
        },
        cursos_agua_vcp: {
          identify: false,
          title: "Barrios",
        },
        calles_carlos_paz: {
          identify: false,
          title: "Barrios",
        },
        zona_A_de_servicios: {
          identify: false,
          title: "Barrios",
        },
        area_protegida_camiare: {
          identify: false,
          title: "Barrios",
        },
        equipamientos: {
          identify: true,
          kml: true,
          title: "Equipamientos",
          attributeDictionary: {
            name: "Nombre",
            nivel: "Nivel",
            admin: "Administración",
            layer: "Tipo",
          },
        },
        espacios_verdes: {
          identify: false,
          title: "Barrios",
        },
        parcelas_vcp: {
          identify: true,
          title: "Parcela - Municipalidad",
          kml: true,
          attributeDictionary: {
            circunscri: "Circunscripción",
            seccion: "Sección",
            manzana: "Manzana",
            parcela: "Parcelas",
            nomencla: "Nomenclatura",
            construido: "Construido",
            barrios: "Barrio",
          },
        },
        manzanas: {
          identify: false,
          title: "Barrios",
        },
        parcelas_graf_vcp: {
          title: "Parcela - DGC",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
        radios_urbanos: {
          identify: false,
          title: "Barrios",
        },
      },
    },
    "Villa Carlos Paz - Planeamiento Urbano": {
      buscaService: {
        services: ["getubiVCP", "getparcelavcppornom", "getpornomycuenta"],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },
        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
        - Dirección completa<br> \
        - Nomenclatura Catastral Municipal<br> \
        - Cuenta Rentas \
        - Nomenclatura Catastral Provincial<br><br> \
        Presione Enter para buscar.",
      },

      layers: {
        barrios: {
          identify: false,
          title: "Barrios",
        },
        cursos_agua_vcp: {
          identify: false,
          title: "Barrios",
        },
        calles_carlos_paz: {
          identify: false,
          title: "Barrios",
        },
        zona_A_de_servicios: {
          identify: false,
          title: "Barrios",
        },
        area_protegida_camiare: {
          identify: false,
          title: "Barrios",
        },
        normativa_urbana: {
          identify: true,
          title: "Normativa de Zonificación Urbana",
          kml: true,
          attributeDictionary: {
            normativa: "Zona",
            f_o_s: "FOS",
          },
        },
        espacios_verdes: {
          identify: false,
          title: "Barrios",
        },
        parcelas_vcp: {
          identify: true,
          title: "Parcela - Municipalidad",
          kml: true,
          attributeDictionary: {
            circunscri: "Circunscripción",
            seccion: "Sección",
            manzana: "Manzana",
            parcela: "Parcelas",
            nomencla: "Nomenclatura",
            construido: "Construido",
            barrios: "Barrio",
          },
        },
        manzanas: {
          identify: false,
          title: "Barrios",
        },
        parcelas_graf_vcp: {
          title: "Parcela - DGC",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
        radios_urbanos: {
          identify: false,
          title: "Barrios",
        },
      },
    },
    "Villa Allende - Mapa de Riesgos para Inundación": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        parcelas_graf: {
          title: "Parcelas",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
        radios_urbanos: {
          identify: false,
          title: "Radio Municipal",
        },
        riesgo_VA201120: {
          identify: true,
          title: "Riesgo para Inundación",
          attributeDictionary: {
            grado: "Grado",
            descripción: "Descripción",
          },
        },
        vulnerabilidad_VA201120: {
          identify: true,
          title: "Vulnerabilidad",
          attributeDictionary: {
            grado: "Grado",
            descripción: "Descripción",
          },
        },
        amenaza_VA201120: {
          identify: true,
          title: "Amenaza",
          attributeDictionary: {
            grado: "Grado",
            descripción: "Descripción",
          },
        },
      },
    },
    "La Granja - Mapa de Riesgos para Incendios": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        parcelas_graf: {
          title: "Parcelas",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
        radios_urbanos: {
          identify: false,
          title: "Radio Municipal",
        },
        riesgo_LG201120: {
          identify: true,
          title: "Riesgo para Incendio",
          attributeDictionary: {
            grado: "Grado",
            descripción: "Descripción",
          },
        },
        vulnerabilidad_LG201120: {
          identify: true,
          title: "Vulnerabilidad",
          attributeDictionary: {
            grado: "Grado",
            descripción: "Descripción",
          },
        },
        amenaza_LG201120: {
          identify: true,
          title: "Amenaza",
          attributeDictionary: {
            grado: "Grado",
            descripción: "Descripción",
          },
        },
      },
    },
    "Planeamiento Urbano - Usos del Suelo (Ord. 8133)": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        parcelas_capital: {
          title: "Parcelas",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
        ord_8133_202107: {
          title: "Uso del Suelo (Ord 8133)",
          identify: true,
          service: "/ord_8133",
          kml: true,
          field: "id",
        },
        secciones: {
          identify: false,
          title: "Departamentos",
        },
        circunscripciones_capital: {
          identify: false,
          title: "Departamentos",
        },
        manzana_capital: {
          identify: false,
          title: "Departamentos",
        },
      },
    },
    "Tierra Urbana Vacante ": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        prom_baldiom_manzana_2020: {
          identify: true,
          kml: true,
          title: "% Tierra Vacante por Mz 2020",
          attributeDictionary: {
            nc_manzana: "Nomenclatura de la Manzana",
            prom_baldiom_2020: "Porcentaje de m2 baldíos 2020 a nivel de Manzana",
            parcelas_edificadas: "Cantidad de parcelas edificadas en la Manzana",
            parcelas_baldias: "Cantidad de parcelas baldias en la Manzana",
            n_parcelas: "Cantidad de parcelas  en la Manzana",
          },
        },
        prom_baldiom_manzana_2019: {
          identify: true,
          kml: true,
          title: "% Tierra Vacante por Mz 2019",
          attributeDictionary: {
            nc_manzana: "Nomenclatura de la Manzana",
            prom_baldiom_2019: "Porcentaje de m2 baldíos 2019 a nivel de Manzana",
            parcelas_edificadas: "Cantidad de parcelas edificadas en la Manzana",
            parcelas_baldias: "Cantidad de parcelas baldias en la Manzana",
            n_parcelas: "Cantidad de parcelas  en la Manzana",
          },
        },
        prom_baldiom_manzana_2018: {
          identify: true,
          kml: true,
          title: "% Tierra Vacante por Mz 2018",
          attributeDictionary: {
            nc_manzana: "Nomenclatura de la Manzana",
            prom_baldiom_2018: "Porcentaje de m2 baldíos 2018 a nivel de Manzana",
            parcelas_edificadas: "Cantidad de parcelas edificadas en la Manzana",
            parcelas_baldias: "Cantidad de parcelas baldias en la Manzana",
            n_parcelas: "Cantidad de parcelas  en la Manzana",
          },
        },
        radios_urbanos: {
          identify: false,
          title: "Radios Urbanos",
        },
        parcelas_graf: {
          title: "Parcelas",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
        espacios_verdes_pcia: {
          identify: false,
          title: "Espacios Verdes",
        },
        secciones: {
          identify: false,
          title: "Secciones",
        },
        circunscripciones: {
          identify: false,
          title: "Circunscripciones",
        },
      },
    },

    "Planeamiento Urbano - Ocupación del Suelo": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },

      dataOwner: {
        name: "Municipalidad de Córdoba",
        url: "https://cordoba.gob.ar/"
      },
      layers: {
        "parcelas_capital": {
          title: "Parcelas",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela"
        },
        "ord_8256_202201": {
          title: "Ocupación del Suelo (Ord 8256)",
          identify: true,
          service: "/ord_8256",
          kml: true,
          field: "fid"
        },
        "APU_8256": {
          title: "APU_8256",
          identify: true,
          kml: true,
          service: "/APU_8256",
          kml: true,
          field: "fid"
        },
        "centro_de_manzana_8256": {
          title: "centro_de_manzana_8256",
          identify: true,
          service: "/centro_de_manzana_8256",
          kml: true,
          field: "fid"
        },
        "secciones": {
          identify: false,
          title: "Departamentos"
        },
        "circunscripciones_capital": {
          identify: false,
          title: "Departamentos"
        },
        "manzana_capital": {
          identify: false,
          title: "Departamentos"
        },
        "centro_historico_8256_08": {
          title: "Centro Histórico (Ord 11190)",
          identify: true,
          attributeDictionary: {
            "nombre_app": "Nombre Área de Protección del Patrimonio"
          }
        },
        "ord_8256_parc": {
          title: "Parcela - Municipalidad",
          identify: true,
          attributeDictionary: {
            "nomenclatura_muni": "Nomenclatura",
            "ord_y_perfil_8256": "N° de Ordenanza - Perfil"
          }
        }

      }
    },
    "Planeamiento Urbano - Fraccionamiento (Ord. 8060 y Modificatorias)": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        ordenanzas_muni_parc: {
          identify: true,
          kml: true,
          title: "ordenazas parcelas",
          attributeDictionary: {
            "idecor:8060_zonificacion": "Zona ord 8060",
            nomenclatura_muni: "Nomeclatura Municipal",
          },
        },
        ord_8060_m08: {
          identify: true,
          kml: true,
          title: "Fraccionamiento (Ord 8060)",
          attributeDictionary: {
            zonificacion: "Zonificación",
            sector: "Sector",
            descripcion: "Descripción",
            frente: "Frente mínimo (m)",
            superficie: "Superficie mínima (m2)",
            plan_vivienda_frente: "P/Plan de Vivienda, Frente (m)",
            plan_vivienda_superficie: "P/Plan de Vivienda, Superficie (m2)",
            antecedentes: "Antecedentes legales",
            observaciones: "Observaciones",
            excepciones: "Excepciones",
          },
        },
        secciones: {
          identify: false,
          title: "Departamentos",
        },
        circunscripciones_capital: {
          identify: false,
          title: "Departamentos",
        },
        red_vial_8060: {
          identify: false,
          title: "Departamentos",
        },
        red_vial_9089: {
          identify: false,
          title: "Departamentos",
        },
        manzana_capital: {
          identify: false,
          title: "Departamentos",
        },
        parcelas_capital: {
          title: "Parcelas",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
      },
    },
    "Mapa Vial": {
      buscaService: {
        services: [
          "getubi",
          "getLocalidadesYParajes",
          "getRedVialProvincial",
          "getRedVialNacional",
          "getConsorcio",
          "getRegional",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Localidad<br> \
      - Nombre Ruta Provicial<br> \
      - Nombre Ruta Nacional<br> \
      - Nombre Regional<br> \
      - Nombre Consorcio<br><br> \
      Presione Enter para buscar.",
      },
      dataOwner: {
        name: "Dirección Provincial de Vialidad",
        url: "https://www.cba.gov.ar/reparticion/ministerio-de-obras-publicas/"
      },
      layers: {
        localidad_punto: {
          identify: false,
          title: "Localidades (puntos)",
        },
        lineas_de_transporte_ferroviario_AN010: {
          identify: false,
          title: "Ferrocarril (IGN)",
        },
        departamentos: {
          identify: false,
          title: "Departamentos",
        },
        provincia: {
          identify: false,
          title: "Provincia",
        },
        parcelas_graf: {
          identify: true,
          title: "Parcela - DGC",
          service: "/parcelascatastroservice",
          field: "par_idparcela",
          kml: true,
        },
        radios_urbanos: {
          identify: true,
          title: "Radio Municipal",
          kml: true,
          attributeDictionary: {
            key: "Nomenclatura Radio Urbano",
            nombre: "Nombre Radio Urbano",
            url: "Ley que le da origen",
            area_ha: "Area (Ha)",
            tipo_gobierno: "Tipo de gobierno",
          },
        },
        red_vial_provincial: {
          identify: true,
          title: "Red Vial Provincial",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre",
            codigo: "Código",
            tipo: "Tipo",
            regional: "Regional",
            nombre_consorcio: "Nombre de consorcio",
            nro_consorcio: "Nro Consorcio",
            estado: "Estado",
            red: "Red",
          },
        },
        red_vial_nacional: {
          identify: true,
          title: "Red Vial Nacional",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre",
            tramo: "Tramo",
            tipo: "Tipo",
          },
        },
        consorcios_camineros: {
          identify: true,
          title: "Consorcio Caminero",
          kml: true,
          attributeDictionary: {
            nombre_consorcio: "Nombre de consorcio",
            nro_consorcio: "Nro de consorcio",
            regional: "Regional",
          },
        },
        regionales: {
          identify: true,
          title: "Regional",
          kml: true,
          attributeDictionary: {
            nombre: "Regional",
          },
        },
      },
    },
    "Estatus Hídrico": {
      buscaService: {
        services: ["getubi", "getLocalidadesYParajes"],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      Presione Enter para buscar.",
      },
      layers: {
        provincia: {
          identify: false,
          title: "Provincia",
        },
        departamentos: {
          identify: false,
          title: "Departamentos",
        },
        parcelas_graf: {
          title: "Parcelas",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
        localidad_punto: {
          identify: false,
          title: "Localidades",
        },
        leyenda_humedad: {
          identify: false,
          title: "Leyenda Humedad",
        },
        MHS_GPMIMERG_APIDIARIO_1: {
          identify: true,
          title: "API Diario - Día 1",
          attributeDictionary: {
            APIDIARIO: "API Diario (mm)",
          },
        },
        MHS_GPMIMERG_APIDIARIO_2: {
          identify: true,
          title: "API Diario - Día 2",
          attributeDictionary: {
            APIDIARIO: "API Diario (mm)",
          },
        },
        MHS_GPMIMERG_APIDIARIO_3: {
          identify: true,
          title: "API Diario - Día 3",
          attributeDictionary: {
            APIDIARIO: "API Diario (mm)",
          },
        },
        MHS_GPMIMERG_APIDIARIO_4: {
          identify: true,
          title: "API Diario - Día 4",
          attributeDictionary: {
            APIDIARIO: "API Diario (mm)",
          },
        },
        MHS_GPMIMERG_APIDIARIO_5: {
          identify: true,
          title: "API Diario - Día 5",
          attributeDictionary: {
            APIDIARIO: "API Diario (mm)",
          },
        },
        MHS_GPMIMERG_APIDIARIO_6: {
          identify: true,
          title: "API Diario - Día 6",
          attributeDictionary: {
            APIDIARIO: "API Diario (mm)",
          },
        },
        MHS_GPMIMERG_APIDIARIO_7: {
          identify: true,
          title: "API Diario - Día 7",
          attributeDictionary: {
            APIDIARIO: "API Diario (mm)",
          },
        },
        MHS_GPMIMERG_CNDINAMICO_1: {
          identify: true,
          title: "Número de Curva Dinámico - Día 1",
          attributeDictionary: {
            CNDinamico: "Número de Curva Dinámico",
          },
        },
        MHS_GPMIMERG_CNDINAMICO_2: {
          identify: true,
          title: "Número de Curva Dinámico - Día 2",
          attributeDictionary: {
            CNDinamico: "Número de Curva Dinámico",
          },
        },
        MHS_GPMIMERG_CNDINAMICO_3: {
          identify: true,
          title: "Número de Curva Dinámico - Día 3",
          attributeDictionary: {
            CNDinamico: "Número de Curva Dinámico",
          },
        },
        MHS_GPMIMERG_CNDINAMICO_4: {
          identify: true,
          title: "Número de Curva Dinámico - Día 4",
          attributeDictionary: {
            CNDinamico: "Número de Curva Dinámico",
          },
        },
        MHS_GPMIMERG_CNDINAMICO_5: {
          identify: true,
          title: "Número de Curva Dinámico - Día 5",
          attributeDictionary: {
            CNDinamico: "Número de Curva Dinámico",
          },
        },
        MHS_GPMIMERG_CNDINAMICO_6: {
          identify: true,
          title: "Número de Curva Dinámico - Día 6",
          attributeDictionary: {
            CNDinamico: "Número de Curva Dinámico",
          },
        },
        MHS_GPMIMERG_CNDINAMICO_7: {
          identify: true,
          title: "Número de Curva Dinámico - Día 7",
          attributeDictionary: {
            CNDinamico: "Número de Curva Dinámico",
          },
        },
        MHS_GPMIMERG_PCNTLAPI_1: {
          identify: true,
          title: "Percentiles del API semanal - Día 1",
          attributeDictionary: {
            PCNTLAPI: "Percentiles del API semanal (%)",
          },
        },
        MHS_GPMIMERG_PCNTLAPI_2: {
          identify: true,
          title: "Percentiles del API semanal - Día 2",
          attributeDictionary: {
            PCNTLAPI: "Percentiles del API semanal (%)",
          },
        },
        MHS_GPMIMERG_PCNTLAPI_3: {
          identify: true,
          title: "Percentiles del API semanal - Día 3",
          attributeDictionary: {
            PCNTLAPI: "Percentiles del API semanal (%)",
          },
        },
        MHS_GPMIMERG_PCNTLAPI_4: {
          identify: true,
          title: "Percentiles del API semanal - Día 4",
          attributeDictionary: {
            PCNTLAPI: "Percentiles del API semanal (%)",
          },
        },
        MHS_GPMIMERG_PCNTLAPI_5: {
          identify: true,
          title: "Percentiles del API semanal - Día 5",
          attributeDictionary: {
            PCNTLAPI: "Percentiles del API semanal (%)",
          },
        },
        MHS_GPMIMERG_PCNTLAPI_6: {
          identify: true,
          title: "Percentiles del API semanal - Día 6",
          attributeDictionary: {
            PCNTLAPI: "Percentiles del API semanal (%)",
          },
        },
        MHS_GPMIMERG_PCNTLAPI_7: {
          identify: true,
          title: "Percentiles del API semanal - Día 7",
          attributeDictionary: {
            PCNTLAPI: "Percentiles del API semanal (%)",
          },
        },
      },
    },
    "Cobertura y Uso de Suelo 2017/2018 - 1 ha": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        departamentos_lclu: {
          identify: true,
          title: "Departamentos",
          service: "/departamentos_lclu",
          field: "fid",
        },
        radios_urbanos: {
          identify: false,
          title: "Radios Urbanos",
        },
        parcelas_graf: {
          title: "Parcelas",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
        mapa_g_segm_q_0809: {
          identify: true,
          service: "/g_segm_q_0809",
          field: "GRAY_INDEX",
          kml: false,
          title: "Land Cover (2017/18) 1 ha",
        },
      },
    },
    "Obras Públicas": {
      buscaService: {
        services: [
          "getubi",
          "getLocalidadesYParajes",
          "getRadiosUrbanos",
          "getobrapublicaByName",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Nombre de la Obra <br><br><br> \
      Presione Enter para buscar.",
      },
      layers: {
        departamentos: {
          identify: false,
        },
        provincia: {
          identify: false,
        },
        obras_publicas_agua: {
          identify: true,
          title: "Obra Pública",
          service: "/getobrapublica",
          kml: false,
          field: "fid",
        },
        obras_publicas_cloacas: {
          identify: true,
          title: "Obra Pública",
          service: "/getobrapublica",
          kml: false,
          field: "fid",
        },
        obras_publicas_inundaciones: {
          identify: true,
          title: "Obra Pública",
          service: "/getobrapublica",
          kml: false,
          field: "fid",
        },
        obras_publicas_electricas: {
          identify: true,
          title: "Obra Pública",
          service: "/getobrapublica",
          kml: false,
          field: "fid",
        },
        obras_publicas_renovables: {
          identify: true,
          title: "Obra Pública",
          service: "/getobrapublica",
          kml: false,
          field: "fid",
        },
        obras_publicas_gas_natural: {
          identify: true,
          title: "Obra Pública",
          service: "/getobrapublica",
          kml: false,
          field: "fid",
        },
        radios_urbanos: {
          identify: true,
          title: "Radio Municipal",
          kml: true,
          attributeDictionary: {
            key: "Nomenclatura Radio Urbano",
            nombre: "Nombre Radio Urbano",
            url: "Ley que le da origen",
            area_ha: "Area (Ha)",
            tipo_gobierno: "Tipo de gobierno",
          },
        },
      },
    },
    "Materia Orgánica del Suelo": {
      buscaService: {
        services: [
          "getubi",
          "getLocalidadesYParajes",
          "getpornomycuenta",
          "getUCs",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Localidad<br> \
      - Cuenta de Rentas<br> \
      - Nomenclatura Catastro Provincial<br> \
      - Unidad Cartográfica<br><br> \
      Presione Enter para buscar.",
      },
      layers: {
        departamentos: {
          identify: false,
          title: "Departamentos",
        },
        radios_urbanos: {
          identify: false,
          title: "Radios Municipales",
        },
        cartas_suelo_unidas_2021: {
          identify: true,
          title: "Carta de Suelo (CUS)",
          kml: true,
          attributeDictionary: {
            uc: "Unidad cartográfica",
            ip: "Índice de productividad",
            cap: "Capacidad de uso",
          },
        },
        materia_organica_2021: {
          identify: true,
          title: "Materia Orgánica",
          kml: true,
          attributeDictionary: {
            mo: "Materia orgánica (%)",
            mo_cv: "Incertidumbre de predicción (%)",
          },
        },
        parcelas_graf: {
          title: "Parcelas",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
      },
    },
    "Mapa Evaluación Incendios": {
      buscaService: {
        services: ["getubi", "getLocalidadesYParajes"],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      Presione Enter para buscar.",
      },
      layers: {
        radios_urbanos: {
          identify: true,
          title: "Radio Municipal",
          kml: true,
          attributeDictionary: {
            key: "Nomenclatura Radio Urbano",
            nombre: "Nombre Radio Urbano",
            url: "Ley que le da origen",
            area_ha: "Area (Ha)",
            tipo_gobierno: "Tipo de gobierno",
          },
        },
        area_incendios_2020_1: {
          identify: true,
          title: "Área Afectada",
          kml: true,
          attributeDictionary: {
            name: "Nombre Zona",
            inicio: "Inicio",
            nombre_if: "nombre_if",
          },
        },
        departamentos: {
          identify: false,
          title: "Localidades",
        },
        parcelas_graf: {
          title: "Parcela - DGC",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
        pendiente_5m_cba: {
          identify: true,
          kml: false,
          title: "Pendiente 5m",
          attributeDictionary: {
            GRAY_INDEX: "Pendiente (%)",
          },
        },
        pendiente_90m_cba: {
          identify: true,
          kml: false,
          title: "Pendiente 90m",
          attributeDictionary: {
            GRAY_INDEX: "Pendiente (%)",
          },
        },
        dem_5m_cba_ext: {
          identify: true,
          kml: false,
          title: "MDE aerofotogramétrico 5m",
          attributeDictionary: {
            GRAY_INDEX: "Altura (msnm)",
          },
        },
        dem_ign_v2_cba_ext: {
          identify: true,
          kml: false,
          title: "MDE-Ar v2.0 30m",
          attributeDictionary: {
            GRAY_INDEX: "Altura (msnm)",
          },
        },
        dem_merit_cba_ext: {
          identify: true,
          kml: false,
          title: "MDE MERIT 90m",
          attributeDictionary: {
            GRAY_INDEX: "Altura (msnm)",
          },
        },
        unidades_gestion_hidrica: {
          identify: true,
          title: "Unidad de Gestión Hídrica",
          kml: true,
          attributeDictionary: {
            cod_cuenca: "Código cuenca",
            sistema: "Nombre de la Unidad de Gestión Hídrica",
            zona: "Zona",
            cuenca: "Nombre de la Cuenca",
            cod_sist: "Código",
            sup_cuerpo: "Sup. de Cuerpos de Agua (km2)",
            long_curso: "Lon. de Cursos de Agua (km)",
            altura_max: "Altura Máxima (m)",
            altura_min: "Altura Mínima (m)",
            sup_subcue: "Superficie (km2)",
            perim_subc: "Perímetro (km)",
          },
        },
        subcuencas: {
          identify: true,
          title: "Subcuenca",
          kml: true,
          attributeDictionary: {
            subcuenca: "Nombre de la subcuenca",
            cuenca: "Nombre de la cuenca",
            cod_cuenca: "Código de la cuenca",
            sup_cuerpo: "Sup. de Cuerpos de Agua (km2)",
            long_curso: "Lon. de Cursos de Agua (km)",
            altura_max: "Altura Máxima (m)",
            altura_min: "Altura Mínima (m)",
            sup_subcue: "Superficie (km2)",
            perim_subc: "Perímetro (km)",
          },
        },
        cuencas_hidrograficas: {
          identify: true,
          title: "Cuenca Hidrográfica",
          kml: true,
          attributeDictionary: {
            cuenca: "Nombre de la cuenca",
            cod_cuenca: "Código de la cuenca",
            sup_cuerpo: "Sup. de Cuerpos de Agua (km2)",
            long_curso: "Lon. de Cursos de Agua (km)",
            altura_max: "Altura Máxima (m)",
            altura_min: "Altura Mínima (m)",
            sup_cuenca: "Superficie (km2)",
            perim_cuen: "Perímetro (km)",
          },
        },
        cursos_de_agua_aprhi: {
          identify: false,
          title: "Curso de agua",
          kml: false,
        },
        cuerpos_de_agua_naturales: {
          identify: false,
          title: "Cuerpo de agua",
          kml: false,
        },
        embalses_aprhi: {
          identify: false,
          title: "Embalse",
          kml: false,
        },
        regiones_naturales: {
          title: "Región Natural",
          identify: false,
          kml: true,
          attributeDictionary: {
            nombre: "Nombre",
          },
        },
        cartas_suelo_unidas_2020: {
          identify: true,
          title: "Carta de Suelo",
          kml: true,
          attributeDictionary: {
            uc: "Unidad Cartográfica",
            ip: "Índice de productividad",
            cap: "Capacidad de uso",
          },
        },
        analisis_shlomo: {
          identify: false,
          title: "Fragmentacion detallada",
          identify: false,
        },
      },
    },
    "Jesús María - Infraestructura y Servicios": {
      buscaService: {
        services: [
          "getubiJesusMaria",
          "GetParcelas30062020",
          "GetBarrioJesusMaria",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Nomenclatura Municipal<br> \
      - Nombre de Barrio<br><br> \
      Presione Enter para buscar.",
      },
      layers: {
        barrios: {
          identify: false,
          title: "Barrio",
        },
        radios_urbanos: {
          identify: false,
          title: "Radio Urbano",
        },
        curso_de_agua: {
          identify: false,
          title: "Curso de agua",
        },
        espacio_verde_jm: {
          identify: false,
          title: "Espacio Verde",
        },
        luminarias_lineas: {
          identify: false,
          title: "Espacio Verde",
        },
        luminarias_puntos: {
          identify: false,
          title: "Espacio Verde",
        },
        red_agua: {
          identify: false,
          title: "Espacio Verde",
        },
        red_cloacas: {
          identify: false,
          title: "Espacio Verde",
        },
        red_desagues: {
          identify: false,
          title: "Espacio Verde",
        },
        jm_red_gas_poligono: {
          identify: false,
          title: "Espacio Verde",
        },
        manzanas30062020: {
          identify: false,
          title: "Manzanas",
        },
        parcelas_graf: {
          title: "Parcela - DGC",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
        cursos_de_agua_aprhi: {
          identify: true,
          title: "Curso de Agua",
          attributeDictionary: {
            ncompleto: "Nombre",
            tipo: "Tipo",
            departamen: "Departamento",
            cuenca: "Cuenca",
            subcuenca_: "Subcuenca",
            shape__len: "Long. de Curso de Agua (km)",
          },
        },
        jm_ejes_calles: {
          identify: true,
          title: "Eje de Calle",
          kml: true,
          attributeDictionary: {
            nombre2: "Nombre",
            estado: "Estado",
            desde: "Altura (desde)",
            hasta: "Altura (hasta)",
            calle: "Medida de calle (m)",
            calzada: "Medida de calzada (m)",
            vereda: "Medida de vereda (m)",
            obs: "Observación",
          },
        },
        parcelas30062020: {
          identify: true,
          title: "Parcela - Municipalidad",
          kml: true,
          attributeDictionary: {
            nomencmuni: "Nomenclatura municipal",
            frente: "Frente",
            fondo: "Fondo",
            supterreno: "Superficie terreno",
            ubicacion: "Dirección oficial",
            dsbarrio: "Barrio",
          },
        },
        patrones_asentamiento: {
          identify: true,
          title: "Patrón de asentamiento urbano",
          kml: true,
          attributeDictionary: {
            patron: "Tipo",
            subdivfren: "Frente mínimo",
            subdivfond: "Sup. mínima",
            ocupacionf: "FOS",
            ocupacioni: "IEP",
            ocupacionr: "Retiro",
            usosdomina: "Uso dominante",
            usoscomple: "Uso complementario",
            usosrestri: "Uso restringido",
            obs: "Observación",
            alturamaxi: "Alt. máxima (ordenanza)",
            alturamax: "Alt. máxima",
            supedifica: "Sup. Edificable Min. Multif.",
            retirodefo: "Retiro de fondo",
          },
        },
      },
    },
    "Jesús María - Planeamiento Urbano": {
      buscaService: {
        services: [
          "getubiJesusMaria",
          "GetAsentamientoJesusMaria",
          "GetParcelas30062020",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Nomenclatura Municipal<br> \
      - Por Tipo de Uso del Suelo <br><br> \
      Presione Enter para buscar.",
      },
      layers: {
        barrios: {
          identify: false,
          title: "Barrio",
        },
        radios_urbanos: {
          identify: false,
          title: "Radio Municipal",
        },
        espacio_verde_jm: {
          identify: false,
          title: "Espacio Verde",
        },
        manzanas30062020: {
          identify: false,
          title: "Manzana",
        },
        parcelas_graf: {
          title: "Parcela - DGC",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
        cursos_de_agua_aprhi: {
          identify: true,
          title: "Curso de Agua",
          attributeDictionary: {
            ncompleto: "Nombre",
            tipo: "Tipo",
            departamen: "Departamento",
            cuenca: "Cuenca",
            subcuenca_: "Subcuenca",
            shape__len: "Long. de Curso de Agua (km)",
          },
        },
        jm_ejes_calles: {
          identify: true,
          title: "Eje de Calle",
          kml: true,
          attributeDictionary: {
            nombre2: "Nombre",
            estado: "Estado",
            desde: "Altura (desde)",
            hasta: "Altura (hasta)",
            calle: "Medida de calle (m)",
            calzada: "Medida de calzada (m)",
            vereda: "Medida de vereda (m)",
            obs: "Observación",
          },
        },
        parcelas30062020: {
          identify: true,
          title: "Parcela - Municipalidad",
          kml: true,
          attributeDictionary: {
            nomencmuni: "Nomenclatura municipal",
            frente: "Frente",
            fondo: "Fondo",
            supterreno: "Superficie terreno",
            ubicacion: "Dirección oficial",
            dsbarrio: "Barrio",
          },
        },
        jm_uso_suelo_ord4196: {
          identify: true,
          title: "Usos de Suelo (Ord 4196).",
          kml: true,
          attributeDictionary: {
            patron: "Sigla",
            dspatron: "Tipo",
            usodomina: "Uso dominante",
            usoscomple: "Uso complementario",
            usosrestri: "Uso restringido",
            retirofrent: "Retiro frente",
            retirolat: "Retiro lateral",
            fondo: "Retiro fondo",
            altmax: "Alt. máxima",
            fos: "FOS",
            fot: "FOT",
            subdifond: "Sup. mínima",
            subdifrent: "Frente mínimo",
            unidfunc: "Unidad funcional",
            dispespecial: "Observación",
          },
        },
      },
    },
    "Jesús María - Catastro Municipal": {
      buscaService: {
        services: [
          "getubiJesusMaria",
          "GetParcelas30062020",
          "GetBarrioJesusMaria",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Nomenclatura Municipal<br> \
      - Nombre de Barrio<br><br> \
      Presione Enter para buscar.",
      },
      layers: {
        barrios: {
          identify: false,
          title: "Barrios",
        },
        radios_urbanos: {
          identify: false,
          title: "Radio Urbano",
        },
        espacio_verde_jm: {
          identify: false,
          title: "Espacio Verde",
        },
        manzanas30062020: {
          identify: false,
          title: "Manzanas",
        },
        cursos_de_agua_aprhi: {
          identify: true,
          title: "Curso de Agua",
          attributeDictionary: {
            ncompleto: "Nombre",
            tipo: "Tipo",
            departamen: "Departamento",
            cuenca: "Cuenca",
            subcuenca_: "Subcuenca",
            shape__len: "Long. de Curso de Agua (km)",
          },
        },
        jm_ejes_calles: {
          identify: true,
          title: "Eje de Calle",
          kml: true,
          attributeDictionary: {
            nombre2: "Nombre",
            estado: "Estado",
            desde: "Altura (desde)",
            hasta: "Altura (hasta)",
            calle: "Medida de calle (m)",
            calzada: "Medida de calzada (m)",
            vereda: "Medida de vereda (m)",
            obs: "Observación",
          },
        },
        parcelas_graf: {
          title: "Parcela - DGC",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
        parcelas30062020: {
          identify: true,
          title: "Parcela - Municipalidad",
          kml: true,
          attributeDictionary: {
            nomencmuni: "Nomenclatura municipal",
            frente: "Frente",
            fondo: "Fondo",
            supterreno: "Superficie terreno",
            ubicacion: "Dirección oficial",
            dsbarrio: "Barrio",
          },
        },
      },
    },
    "Recursos Hídricos": {
      buscaService: {
        services: [
          "getubi",
          "getLocaPunto",
          "getCursoAgua",
          "getEmbalse",
          "getpornomycuenta",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección completa<br> \
      - Nombre de Curso de Agua<br> \
      - Nombre de Embalse<br> \
      - Nombre de Localidad<br> \
      - Cuenta de Rentas<br> \
      - Nomenclatura Catastral Provincial<br><br> \
      Presione Enter para buscar.",
      },
      dataOwner: {
        name: "Administración Provincial de Recursos Hídricos - APRHI",
        url: "https://ministeriodeserviciospublicos.cba.gov.ar/aprhi/",


      },
      layers: {
        localidad_punto: {
          identify: true,
          title: "Localidad",
          attributeDictionary: {
            departamento: "Departamento",
            localidad: "Localidad",
          },
        },
        radios_urbanos: {
          identify: false,
          title: "Localidad",
        },
        cursos_de_agua_aprhi: {
          identify: true,
          title: "Curso de Agua",
          attributeDictionary: {
            ncompleto: "Nombre",
            tipo: "Tipo",
            departamen: "Departamento",
            cuenca: "Cuenca",
            subcuenca_: "Subcuenca",
            shape__len: "Long. de Curso de Agua (km)",
          },
        },
        embalses_aprhi: {
          identify: true,
          title: "Embalses",
          attributeDictionary: {
            nombre: "Nombre",
            tipo: "Tipo",
            cuenca_km2: "Cuenca (km2)",
            nombrecom: "Nombre completo",
            proposito1: "Propósito 1",
            proposito2: "Propósito 2",
            proposito3: "Propósito 3",
          },
        },
        cuerpos_de_agua_naturales_aprhi: {
          identify: false,
        },
        salinas: {
          identify: false,
        },
        departamentos: {
          identify: false,
        },
        provincia: {
          identify: false,
        },
        dem_merit_cba_ext: {
          identify: false,
        },
        parcelas_graf: {
          title: "Parcela",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
        acueductos: {
          identify: true,
          title: "Acueductos",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre",
            estado: "Estado",
            shape__len: "Longitud (m)",
          },
        },
        canales_riego: {
          identify: true,
          title: "Canal de Riego",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre",
            jerarquia: "Jerarquia",
            estado: "Estado",
            zona: "Zona",
            departamen: "Departamento",
            sistema: "Sistema",
          },
        },
        consorcios_canaleros: {
          identify: true,
          title: "Consorcio Canalero",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre",
            expediente: "Expediente",
            resolucin: "Resolución de Aprobación",
            localidade: "Localidades",
            zona: "Zona",
            resolucion: "Resolución de Cambio de Autoridades",
            estado: "Estado",
          },
        },
        unidades_gestion_hidrica: {
          identify: true,
          title: "Unidad de Gestión Hídrica",
          kml: true,
          attributeDictionary: {
            cod_cuenca: "Código cuenca",
            sistema: "Nombre de la Unidad de Gestión Hídrica",
            zona: "Zona",
            cuenca: "Nombre de la Cuenca",
            cod_sist: "Código",
            sup_cuerpo: "Sup. de Cuerpos de Agua (km2)",
            long_curso: "Lon. de Cursos de Agua (km)",
            altura_max: "Altura Máxima (m)",
            altura_min: "Altura Mínima (m)",
            sup_subcue: "Superficie (km2)",
            perim_subc: "Perímetro (km)",
          },
        },
        subcuencas: {
          identify: true,
          title: "Subcuenca",
          kml: true,
          attributeDictionary: {
            subcuenca: "Nombre de la subcuenca",
            cuenca: "Nombre de la cuenca",
            cod_cuenca: "Código de la cuenca",
            sup_cuerpo: "Sup. de Cuerpos de Agua (km2)",
            long_curso: "Lon. de Cursos de Agua (km)",
            altura_max: "Altura Máxima (m)",
            altura_min: "Altura Mínima (m)",
            sup_subcue: "Superficie (km2)",
            perim_subc: "Perímetro (km)",
          },
        },
        cuencas_hidrograficas: {
          identify: true,
          title: "Cuenca Hidrográfica",
          kml: true,
          attributeDictionary: {
            cuenca: "Nombre de la cuenca",
            cod_cuenca: "Código de la cuenca",
            sup_cuerpo: "Sup. de Cuerpos de Agua (km2)",
            long_curso: "Lon. de Cursos de Agua (km)",
            altura_max: "Altura Máxima (m)",
            altura_min: "Altura Mínima (m)",
            sup_cuenca: "Superficie (km2)",
            perim_cuen: "Perímetro (km)",
          },
        },
        dem_merit_cba_ext: {
          identify: false,
          title: "MDE MERIT 90m.",
          kml: true,
          attributeDictionary: {
            GRAY_INDEX: "Altura (msnm)",
          },
        },
      },
    },
    "Cartas de Suelos": {
      buscaService: {
        services: [
          "getubi",
          "getLocalidadesYParajes",
          "getpornomycuenta",
          "getCartassuelo50mil_2022",
          "getCartassuelo100mil_2022"

        ],
        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Localidad o Paraje<br> \
      - Nombre de la Carta de Suelo 100.000 y 50.000<br> \
      - Cuenta de Rentas<br> \
      - Nomenclatura Catastro Provincial<br><br> \
      Presione Enter para buscar.",
      },
      dataOwner: {
        name: "INTA y Gobierno de la Prov. de Córdoba",
        url: "http://suelos.cba.gov.ar/",
      },

      layers: {
        localidad_punto: {
          identify: false,
          title: "Localidad",
        },
        radios_urbanos: {
          identify: false,
          title: "Localidad",
        },
        cartas_provincia_2021: {
          identify: true,
          title: "Carta Portal Suelos",
          service: "/cartas_suelo2021",
          field: "id",
        },
        provincia: {
          identify: false,
        },
        departamentos: {
          identify: false,

        },
        pedania: {
          identify: false,
        },
        v_carta_suelo_50mil_2022: {
          identify: true,
          title: "Escala de semidetalle 1:50.000",
          service: "/cartassuelo50mil_2022",
          field: "id",
          filters: {
            FCS50: {
              title: "Por capacidad de uso 1:50000",
              label: "Clase y subclase de capacidad de uso",
              toUpper: true,
              cql_filter: "strStripAccents(strToUpperCase(cu)) ILIKE '%**%'",
            }
          }

        },
        v_carta_suelo_100mil_2022: {
          identify: true,
          title: "Escala de reconocimiento 1:100.000",
          service: "/cartassuelo100mil_2022",
          field: "id",
          filters: {
            FCS50: {
              title: "Por capacidad de uso 1:100000",
              label: "Clase y subclase de capacidad de uso",
              toUpper: true,
              cql_filter: "strStripAccents(strToUpperCase(cu)) ILIKE '%**%'",
            }
          }
        },
        v_carta_suelo_500mil_2022: {
          identify: true,
          title: "Escala de Reconocimiento 1:500.000",
          service: "/cartassuelo500mil_2022",
          field: "id",
          filters: {
            FCS500: {
              title: "Por capacidad de uso 1:500000",
              label: "Clase y subclase de capacidad de uso",
              toUpper: true,
              cql_filter: "strStripAccents(strToUpperCase(cu)) ILIKE '%**%'",
            }
          }
        },
        cartas_suelo_unidas_2022: {
          identify: false,
        },
        escalas_cartografica_2022: {
          identify: false,
        },
        parcelas_graf: {
          title: "Parcela",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
      },
    },
    "Obras Viales": {
      buscaService: {
        services: [
          "getubi",
          "getLocaPunto",
          "getRedVialProvincial",
          "getRedVialNacional"
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Nombre de Localidad<br> \
      - Nombre de Ruta<br><br> \
      Presione Enter para buscar.",
      },
      dataOwner: {
        name: "Dirección Provincial de Vialidad",
        url: "https://www.cba.gov.ar/reparticion/ministerio-de-obras-publicas/",
      },


      layers: {
        /* GRUPO LIMITES */
        localidad_punto: {
          identify: false,
          title: "Localidad",
        },
        radios_urbanos: {
          identify: false,
          title: "Localidad",
        },
        provincia: {
          identify: false,
        },
        departamentos: {
          identify: false,
        },
        pedania: {
          identify: false,
        },
        /*FIN GRUPO LIMITES */
        red_vial_provincial: {
          identify: true,
          title: "Red Vial Provincial",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre",
            codigo: "Código",
            tipo: "Tipo",
            regional: "Regional",
            nombre_consorcio: "Nombre de consorcio",
            nro_consorcio: "Nro Consorcio",
            estado: "Estado",
            red: "Red",
          },
        },
        red_vial_nacional: {
          identify: true,
          title: "Red Vial Nacional",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre",
            tramo: "Tramo",
            tipo: "Tipo",
          },
        },

        vialidad_obras: {
          identify: true,
          title: "Obra Vial",
          kml: true,
          attributeDictionary: {
            nombre_obra: "Nombre",
            descripcion_obra: "Descripción",
            tipo_obra: "Tipo",
            departamento: "Departamento",
            contratista: "Contratista",
            km: "Km",
            avance: "Avance (%)",
            estado: "Estado",
            monto_obra: "Monto ($)",
            foto_1: "Foto||<a target='blank' href='https://obs-idecor-mapas-docs.obs.sa-argentina-1.myhuaweicloud.com/obras_viales/**.jpeg'> <img src='https://obs-idecor-mapas-docs.obs.sa-argentina-1.myhuaweicloud.com/obras_viales/**.jpeg' width='100%'/></a>",
            foto_2: "Foto||<a target='blank' href='https://obs-idecor-mapas-docs.obs.sa-argentina-1.myhuaweicloud.com/obras_viales/**.jpeg'> <img src='https://obs-idecor-mapas-docs.obs.sa-argentina-1.myhuaweicloud.com/obras_viales/**.jpeg' width='100%'/></a>",
            foto_3: "Foto||<a target='blank' href='https://obs-idecor-mapas-docs.obs.sa-argentina-1.myhuaweicloud.com/obras_viales/**.jpeg'> <img src='https://obs-idecor-mapas-docs.obs.sa-argentina-1.myhuaweicloud.com/obras_viales/**.jpeg' width='100%'/></a>",
            foto_4: "Foto||<a target='blank' href='https://obs-idecor-mapas-docs.obs.sa-argentina-1.myhuaweicloud.com/obras_viales/**.jpeg'> <img src='https://obs-idecor-mapas-docs.obs.sa-argentina-1.myhuaweicloud.com/obras_viales/**.jpeg' width='100%'/></a>",
            foto_5: "Foto||<a target='blank' href='https://obs-idecor-mapas-docs.obs.sa-argentina-1.myhuaweicloud.com/obras_viales/**.jpeg'> <img src='https://obs-idecor-mapas-docs.obs.sa-argentina-1.myhuaweicloud.com/obras_viales/**.jpeg' width='100%'/></a>"
          }
        }
      }
    },
    "Cartas de Suelos 2020": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        cartas_provincia_2020: {
          identify: true,
          title: "Carta Portal Suelos",
          service: "/cartas_suelo2020",
          field: "fid",
        },
        departamentos: {
          identify: false,
        },
        pedania: {
          identify: false,
        },
        cartas_suelo_50mil_2020: {
          identify: true,
          title: "Escala de semidetalle 1:50.000",
          service: "/cartassuelo50",
          field: "fid",
        },
        cartas_suelo_100mil_2020: {
          identify: true,
          title: "Escala de reconocimiento 1:100.000",
          service: "/cartassuelo100",
          field: "fid",
        },
        cartas_suelo_250mil_2020: {
          identify: true,
          title: "Escala de reconocimiento 1:250.000",
          attributeDictionary: {
            uc: "Símbolo",
            ip: "Índice de Productividad",
            cu: "Capacidad de Uso",
            paisaje: "Paisaje",
            composi: "Nombre",
            tipo_un: "Tipo de Unidad",
            comp_1: "Componente 1",
            desc_1: "Posición 1",
            porc_1: "% 1",
            comp_2: "Componente 2",
            desc_2: "Posición 2",
            porc_2: "% 2",
            comp_3: "Componente 3",
            desc_3: "Posición 3",
            porc_3: "% 3",
            comp_4: "Componente 4",
            desc_4: "Posición 4",
            porc_4: "% 4",
            comp_5: "Componente 5",
            desc_5: "Posición 5",
            porc_5: "% 5",
          },
        },
        cartas_suelo_500mil_2020: {
          identify: true,
          title: "Escala de reconocimiento 1:500.000",
          attributeDictionary: {
            uc: "Símbolo",
            ip: "Índice de Productividad",
            cu: "Capacidad de Uso",
            paisaje: "Paisaje",
            composi: "Nombre",
            tipo_un: "Tipo de Unidad",
            comp_1: "Componente 1",
            desc_1: "Posición 1",
            porc_1: "% 1",
            comp_2: "Componente 2",
            desc_2: "Posición 2",
            porc_2: "% 2",
            comp_3: "Componente 3",
            desc_3: "Posición 3",
            porc_3: "% 3",
          },
        },
        cartas_suelo_unidas_2020: {
          identify: false,
        },
        escalas_cartograficas: {
          identify: false,
        },
        parcelas_graf: {
          title: "Parcela",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
      },
    },
    "Urbanizaciones Autorizadas y Aprobadas": {
      mensajeMapa: 'Este mapa muestra información de Jurisdicción Municipal desde 2006 a la actualidad, en su mayoría. Para conocer si un inmueble es “Apto Escritura”, deberá consultar si está registrado en el Catastro Provincial por medio del <a target=\'_blank\' href=\'https://visualizadorcatastral.cba.gov.ar/\'>Informe Catastral</a> o inscripto en el <a target=\'_blank\' href=\'https://registrodelapropiedad.cba.gov.ar/\'>Registro de la Propiedad</a>.',
      dataOwner: {
        name: "Municipalidad de Córdoba",
        url: "https://cordoba.gob.ar/",
      },

      buscaService: {
        services: ["getubi", "getLocalidadesYParajes", "getParcelaDetailServ", "getloteosmuniauto"],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Nomenclatura Municipal del Loteo <br> \
      - Titular del Loteo<br> \
      - Nombre Comercial del Loteo <br> \
      Presione Enter para buscar.",
      },
      mapaBase: "OpenStreetMap",
      layers: {
        parcelas_graf: {
          identify: true,
          title: "Parcela",
          service: "/newdataserv",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
        loteos_muni_autorizados: {
          identify: true,
          title: "Loteo autorizado a venta",
          attributeDictionary: {
            "expediente_1": "Expediente N°",
            "nomenclatu": "Nomenclatura",
            "titular": "Titular",
            "nombre": "Nombre",
            "nombfant": "Nombre comercial",
            "tipoloteo": "Tipo de loteo",
            "cantlotes": "Cantidad de lotes",
            "cantviv": "Cantidad de viviendas",
            "cvt": "Certificado de viabilidad técnica",
            "autorizado": "Autorizado por",
            "decresapro": "Aprobado por",
            "ord_8060": "Ordenanza 8060||VER AQUI||**",
            "modif_12729": "Modificatoria 12729||VER AQUI||**",
            "ord_13077": "Ordenanza 13077||VER AQUI||**",
            "ord_8606": "Ordenanza 8606||VER AQUI||**",
            "ord_11777": "Ordenanza 11777||VER AQUI||**",
            "ord_11687": "Ordenanza 11687||VER AQUI||**",
            "ord_12476": "Ordenanza 12476||VER AQUI||**",
            "modif_10330": "Modificatoria 10330||VER AQUI||**"
          },
          kml: true,
        },
        loteos_muni_aprobados: {
          identify: true,
          title: "Loteo aprobado",
          attributeDictionary: {
            "expediente_1": "Expediente N°",
            "nomenclatu": "Nomenclatura",
            "titular": "Titular",
            "nombre": "Nombre",
            "nombfant": "Nombre comercial",
            "tipoloteo": "Tipo de loteo",
            "cantlotes": "Cantidad de lotes",
            "cantviv": "Cantidad de viviendas",
            "cvt": "Certificado de viabilidad técnica",
            "autorizado": "Autorizado por",
            "decresapro": "Aprobado por",
            "ord_8060": "Ordenanza 8060||VER AQUI||**",
            "modif_12729": "Modificatoria 12729||VER AQUI||**",
            "ord_13077": "Ordenanza 13077||VER AQUI||**",
            "ord_8606": "Ordenanza 8606||VER AQUI||**",
            "ord_11777": "Ordenanza 11777||VER AQUI||**",
            "ord_11687": "Ordenanza 11687||VER AQUI||**",
            "ord_12476": "Ordenanza 12476||VER AQUI||**",
            "modif_10330": "Modificatoria 10330||VER AQUI||**"
          },
          kml: true,
        }
      }
    },
    APRHI: {
      buscaService: {
        services: ["getubi", "getLocalidadesYParajes"],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      Presione Enter para buscar.",
      },
      layers: {
        acueductos: {
          identify: false,
          title: "Acueducto",
          attributeDictionary: {},
          kml: false,
        },
        canales_de_riego: {
          identify: false,
          title: "Canal de riego",
          attributeDictionary: {},
          kml: false,
        },
        estaciones_meteorologicas: {
          identify: false,
          kml: false,
        },
        consorcios_canaleros: {
          identify: false,
          title: "Consorcio canalero",
          kml: false,
        },
        red_de_medicion_de_caudales: {
          identify: false,
          title: "Red de medición de caudales",
          kml: false,
        },
        cursos_de_agua_aprhi: {
          identify: false,
          title: "Curso de agua",
          kml: false,
        },
        cuerpos_de_agua_naturales: {
          identify: false,
          title: "Cuerpo de agua",
          kml: false,
        },
        embalses_aprhi: {
          identify: false,
          title: "Embalse",
          kml: false,
        },
        provincia: {
          identify: false,
          title: "Provincia",
          kml: false,
        },
        salinas: {
          identify: false,
          title: "Salina",
          kml: false,
        },
        subcuencas: {
          identify: true,
          title: "Subcuenca",
          attributeDictionary: {
            subcuenca: "Nombre de la subcuenca",
            cuenca: "Nombre de la cuenca",
            cod_cuenca: "Código de la cuenca",
            sup_subcue: "Superficie (km2)",
            perim_subc: "Perímetro (km)",
            altura_max: "Altura máxima (m)",
            altura_min: "Altura mínima (m)",
            sup_cuerpo: "Sup. De cuerpos de agua (km2)",
            long_curso: "Long. De cursos de agua (km)",
            varones: "N° de varones (aprox)  - censo 2010",
            mujeres: "N° de mujeres (aprox)  - censo 2010",
            poblacion: "Población total (aprox)  - censo 2010",
            hogares: "Hogares (aprox)  - censo 2010",
            viviendas: "Viviendas total (aprox) - censo 2010",
            viv_constr: "Vivienda Satisfactoria (aprox)",
            viv_cons_1: "Vivienda Basica (aprox)",
            viv_cons_2: "Vivienda Insuficiente (aprox)",
            serv_conex: "Calidad Servicios básicos - Satisfactoria (aprox)",
            serv_con_1: "Calidad Servicios básicos - Básico (aprox)",
            serv_con_2: "Calidad Servicios básicos - Insuficiente (aprox)",
            urbano: "Área Urbana (aprox.)",
            ruralagrup: "Área Rural agrupado (aprox.)",
            ruraldispe: "Área Rural disperso (aprox.)",
            superficie: "Trigo y Cebada - superficie (ha):2018",
            superfic_1: "Girasol - superficie (ha)",
            superfic_2: "Maíz - superficie (ha)",
            superfic_3: "Maní - superficie (ha)",
            superfic_4: "Soja - superficie (ha)",
            superfic_5: "Sorgo - superficie (ha)",
          },
          kml: false,
        },
        cuencas_hidrograficas: {
          identify: true,
          title: "Cuenca hidrográfica",
          attributeDictionary: {
            cod_cuenca: "Código",
            cuenca: "Nombre de la Cuenca",
            sup_cuenca: "Superficie (km2)",
            perim_cuen: "Perímetro (km)",
            altura_max: "Altura máxima(m)",
            altura_min: "Altura mínima(m)",
            sup_cuerpo: "Sup. de cuerpos de agua (km2)",
            long_curso: "Long. de cursos de agua (km)",
            varones: "N° de varones (aprox)  - censo 2010",
            mujeres: "N° de mujeres (aprox)  - censo 2010",
            poblacion: "Población total (aprox)  - censo 2010",
            hogares: "Hogares (aprox)  - censo 2010",
            viviendas: "Viviendas total (aprox) - censo 2010",
            viv_constr: "Vivienda Satisfactoria (aprox)",
            viv_cons_1: "Vivienda Basica (aprox)",
            viv_cons_2: "Vivienda Insuficiente (aprox)",
            serv_conex: "Calidad Servicios básicos - Satisfactoria (aprox)",
            serv_con_1: "Calidad Servicios básicos - Básico (aprox)",
            serv_con_2: "Calidad Servicios básicos - Insuficiente (aprox)",
            urbano: "Área Urbana (aprox.)",
            ruralagrup: "Área Rural agrupado (aprox.)",
            ruraldispe: "Área Rural disperso (aprox.)",
            superficie: "Trigo y Cebada - superficie (ha):2018",
            superfic_1: "Girasol - superficie (ha)",
            superfic_2: "Maíz - superficie (ha)",
            superfic_3: "Maní - superficie (ha)",
            superfic_4: "Soja - superficie (ha)",
            superfic_5: "Sorgo - superficie (ha)",
          },
          kml: false,
        },
        unidades_gestion_hidrica: {
          identify: true,
          title: "Unidad de gestión hídrica",
          attributeDictionary: {
            cod_sist: "Código",
            cod_cuenca: "Codigo cuenca",
            sistema: "Nombre de la Unidad de Gestión Hídrica",
            cuenca: "Nombre de la cuenca",
            sup_subcue: "Superficie (km2)",
            perim_subc: "Perímetro (km)",
            altura_max: "Altura máxima (m)",
            altura_min: "Altura mínima (m)",
            sup_cuerpo: "Sup. De cuerpos de agua (km2)",
            long_curso: "Long. De cursos de agua (km)",
            varones: "N° de varones (aprox)  - censo 2010",
            mujeres: "N° de mujeres (aprox)  - censo 2010",
            poblacion: "Población total (aprox)  - censo 2010",
            hogares: "Hogares (aprox)  - censo 2010",
            viviendas: "Viviendas total (aprox) - censo 2010",
            viv_constr: "Vivienda Satisfactoria (aprox)",
            viv_cons_1: "Vivienda Basica (aprox)",
            viv_cons_2: "Vivienda Insuficiente (aprox)",
            serv_conex: "Calidad Servicios básicos - Satisfactoria (aprox)",
            serv_con_1: "Calidad Servicios básicos - Básico (aprox)",
            serv_con_2: "Calidad Servicios básicos - Insuficiente (aprox)",
            urbano: "Área Urbana (aprox.)",
            ruralagrup: "Área Rural agrupado (aprox.)",
            ruraldispe: "Área Rural disperso (aprox.)",
            superficie: "Trigo y Cebada - superficie (ha):2018",
            superfic_1: "Girasol - superficie (ha)",
            superfic_2: "Maíz - superficie (ha)",
            superfic_3: "Maní - superficie (ha)",
            superfic_4: "Soja - superficie (ha)",
            superfic_5: "Sorgo - superficie (ha)",
          },
          kml: false,
        },
      },
    },
    "Actividad Minera": {
      buscaService: {
        services: ["getubi", "getLocalidadesYParajes"],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      Presione Enter para buscar.",
      },
      layers: {
        parcelas_graf: {
          title: "Parcela",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },

        pedania: {
          identify: true,
          title: "Pedanía",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre pedanía",
          },
        },
        cateos: {
          identify: true,
          title: "Cateo",
          kml: true,
          attributeDictionary: {
            estado: "Estado",
            exploracio: "Exploración",
            cateo: "Cateo",
            pedido: "Nro. de pedido",
          },
        },
        minas: {
          identify: true,
          title: "Mina",
          kml: true,
          attributeDictionary: {
            estado: "Estado",
            nom_expte: "Nombre de expediente",
            num_expte: "Nro. de expediente",
            mineral: "Mineral",
          },
        },
        departamentos: {
          identify: true,
          title: "Departamento",
          kml: true,
          attributeDictionary: {
            codigo: "Código departamental",
            nombre: "Nombre departamento",
          },
        },
        provincia: {
          identify: false,
        },
      },
    },
    "Cuarteles de Bomberos Voluntarios": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        cuarteles: {
          identify: true,
          title: "Cuartel de Bomberos Voluntarios",
          attributeDictionary: {
            número: "Número de cuartel",
            codigo: "Código del cuartel",
            nombre: "Nombre del cuartel",
            departamento: "Departamento",
            regional: "N° de Regional",
            telefono: "Teléfono del cuartel",
            zona_riesgo: "Zona de riesgo",
          },
          kml: true,
        },

        jurisdiccion_cuarteles: {
          identify: true,
          title: "Cuartel por jurisdicción",
          attributeDictionary: {
            cuartel: "Nombre de cuartel",
            tipo: "Tipo",
            regional: "Región ",
            hectareas: "Cant. De hectáreas",
            zar: "Zona de Alto Riesgo",
            palto: "Porcentaje de Riesgo Alto",
            pmedio: "Porcentaje de Riesgo Medio",
            pbajo: "Porcentaje de Riesgo Bajo",
            codigo: "Código de Cuartel",
            seccional: "Número de Seccional",
          },
          kml: true,
        },

        provincia: {
          identify: false,
          title: "Zonificación de riesgo",
          kml: true,
        },

        zonas_riesgo_cuarteles: {
          identify: false,
          title: "Zonificación de riesgo",
          kml: true,
        },

        departamentos: {
          identify: false,
          title: "Zonificación de riesgo",
          kml: true,
        },
      },
    },
    "Variables utilizadas en la Valuación de la Tierra Periurbana 2019 (Vig. 2020)": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        ejes_vut: {
          title: "Valor de la tierra urbana 2019",
          identify: false,
        },
        valores_tierra_rural2020: {
          title: "Valor de la tierra rural 2019",
          identify: false,
        },

        peri_variables: {
          identify: true,
          title: "Variable periurbana",
          attributeDictionary: {
            id: "ID",
            vut_pesos: "Valor de la Tierra $/Ha",
            vut_pesos_m2: "Valor de la Tierra $/m2",
            vut_usd: "Valor de la Tierra usd/Ha (1usd = $44.93)",
            "1_monte": "% Monte",
            "2_arbust_m": "% Arbustales y matorrales",
            "11_urb_con": "% Urbano consolidado",
            "12_urb_pro": "% Urbano Proceso de consolidación",
            parce_cant_2: "Cantidad de Parcelas",
            pr_media: "Sup. Media Parcela Rural ",
            cat_otbn4_2: "% Categ. Roja (OTBN) ",
            zona: "Zona",
            p_rural: "Afectación a parcela de val. rural",
          },
          kml: false,
        },
        tendencia_de_valor: {
          identify: false,
          title: "Tendencias de valor",
          kml: false,
        },
        muestra_rural_mapa: {
          identify: false,
          title: "Muestra rural 2019",
          kml: false,
        },
        datos_muestra2019: {
          identify: false,
          title: "Muestra urbana 2019",
          kml: false,
        },
        red_vial: {
          identify: false,
          title: "Red vial primaria sec terciaria",
          kml: false,
        },
        espacio_verde: {
          identify: false,
          title: "Espacios Verdes",
          kml: false,
        },
        zonas_relevantes: {
          identify: false,
          title: "ambiental/industrial/barrios populares",
          kml: false,
        },
        zonas_picos_valor: {
          identify: false,
          title: "Zonas perfil inmobiliario",
          identify: false,
        },
        analisis_shlomo: {
          identify: false,
          title: "Fragmentacion detallada",
          identify: false,
        },
        radios_urbanos: {
          identify: true,
          title: "Radio urbano",
          kml: false,
        },
        "actualizado? está subido al geoserver?": {
          identify: true,
          title: "Parcelario",
          kml: false,
        },
        Nivel3_28_dic_2018_30m_completo: {
          identify: true,
          title: "Land Cover",
          kml: false,
        },
      },
    },
    "Humedad de Suelo - Últimos 7 días": {
      buscaService: {
        services: [
          "getubi",
          "getLocalidadesYParajes",
          "getpornomycuenta",
          "getUCs",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },
        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Localidad<br> \
      - Cuenta de Rentas<br> \
      - Nomenclatura Catastro Provincial<br> \
      - Unidad Cartográfica<br><br> \
      Presione Enter para buscar.",
      },
      layers: {
        cartas_suelo_unidas_2021: {
          title: "Carta de Suelo",
          identify: true,
          kml: false,
          attributeDictionary: {
            uc: "Unidad Cartografica",
            ip: "Indice de Productividad",
            cap: "Capacidad de uso",
          },
        },
        DSS_MSM_1: {
          identify: true,
          title: "Humedad del suelo - Día 1",
          attributeDictionary: {
            PALETTE_INDEX: "Humedad del suelo (%)",
          },
        },
        DSS_MSM_2: {
          identify: true,
          title: "Humedad del suelo - Día 2",
          attributeDictionary: {
            PALETTE_INDEX: "Humedad del suelo (%)",
          },
        },
        DSS_MSM_3: {
          identify: true,
          title: "Humedad del suelo - Día 3",
          attributeDictionary: {
            PALETTE_INDEX: "Humedad del suelo (%)",
          },
        },
        DSS_MSM_4: {
          identify: true,
          title: "Humedad del suelo - Día 4",
          attributeDictionary: {
            PALETTE_INDEX: "Humedad del suelo (%)",
          },
        },
        DSS_MSM_5: {
          identify: true,
          title: "Humedad del suelo - Día 5",
          attributeDictionary: {
            PALETTE_INDEX: "Humedad del suelo (%)",
          },
        },
        DSS_MSM_6: {
          identify: true,
          title: "Humedad del suelo - Día 6",
          attributeDictionary: {
            PALETTE_INDEX: "Humedad del suelo (%)",
          },
        },
        DSS_MSM_7: {
          identify: true,
          title: "Humedad del suelo - Día 7",
          attributeDictionary: {
            PALETTE_INDEX: "Humedad del suelo (%)",
          },
        },
        localidad_punto: {
          identify: false,
        },
        departamentos: {
          identify: false,
        },
        parcelas_graf: {
          title: "Parcela",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
        Nivel2_28_dic_2018_30m: {
          identify: true,
          service: "/coberturanivel2",
          field: "GRAY_INDEX",
          kml: false,
          title: "Categoría Nivel 2",
        },
        provincia: {
          identify: false,
          kml: false,
        },
      },
    },
    "Ocupación del Suelo Urbano ": {
      buscaService: {
        services: ["getubi", "getLocalidadesYParajes", "getpornomycuenta"],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },
        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Localidad<br> \
      - Cuenta de Rentas<br> \
      - Nomenclatura Catastro Provincial<br><br> \
      Presione Enter para buscar.",
      },
      layers: {
        espacios_verdes_pcia: {
          identify: false,
          title: "Espacios Verdes",
        },
        circunscripciones: {
          identify: false,
          title: "Circunscripciones",
        },
        secciones: {
          identify: false,
          title: "Secciones",
        },
        radios_urbanos: {
          identify: false,
          title: "Radios Urbanos",
        },
        perc_edif_2020: {
          title: "Factor de Ocup. por Mz. 2020",
          identify: true,
          kml: true,
          attributeDictionary: {
            nc_manzana: "Nomenclatura de la Manzana",
            perc_edif_2020: "Porcentaje de m2 edificados 2020 a nivel de Manzana",
            parcelas_edificadas: "Cantidad de parcelas edificadas en la Manzana",
            parcelas_baldias: "Cantidad de parcelas baldias en la Manzana",
            n_parcelas: "Cantidad de parcelas  en la Manzana",
          },
        },
        perc_edif_2019: {
          identify: true,
          title: "Factor de Ocup. por Mz. 2019",
          kml: true,
          attributeDictionary: {
            nc_manzana: "Nomenclatura de la Manzana",
            perc_edif_2019: "Porcentaje de m2 edificados 2019 a nivel de Manzana",
            parcelas_edificadas: "Cantidad de parcelas edificadas en la Manzana",
            parcelas_baldias: "Cantidad de parcelas baldias en la Manzana",
            n_parcelas: "Cantidad de parcelas  en la Manzana",
          },
        },
        perc_edif_2018: {
          identify: true,
          title: "Factor de Ocup. por Mz. 2018",
          kml: true,
          attributeDictionary: {
            nc_manzana: "Nomenclatura de la Manzana",
            perc_edif_2018: "Porcentaje de m2 edificados 2018 a nivel de Manzana",
            parcelas_edificadas: "Cantidad de parcelas edificadas en la Manzana",
            parcelas_baldias: "Cantidad de parcelas baldias en la Manzana",
            n_parcelas: "Cantidad de parcelas  en la Manzana",
          },
        },
        raster_perc_edif_completo: {
          identify: true,
          kml: false,
          title: "% de Ocupación en el entorno",
          service: "/perc_edificado",
          field: "value",
          attributeDictionary: {
            GRAY_INDEX: "Porcentaje de Ocupación ",
          },
        },
        parcelas_graf: {
          title: "Parcela",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
      },
    },
    "Relieve provincial": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        parcelas_graf: {
          identify: true,
          title: "Parcela DGC",
          service: "/parcelascatastroservice",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
        localidad_punto: {
          identify: false,
          title: "Localidades",
        },
        dem_5m_cba_ext: {
          identify: true,
          kml: false,
          title: "MDE aerofotogramétrico 5m (IGN)",
          attributeDictionary: {
            GRAY_INDEX: "Altura (msnm - pixel 5m)",
          },
        },
        dem_ign_v2_cba_ext: {
          identify: true,
          kml: false,
          title: "MDE-Ar v2.0 30m (IGN)",
          attributeDictionary: {
            GRAY_INDEX: "Altura (msnm - pixel 30m)",
          },
        },
        dem_merit_cba_ext: {
          identify: true,
          kml: false,
          title: "MDE MERIT 90m",
          attributeDictionary: {
            GRAY_INDEX: "Altura (msnm - pixel 90m)",
          },
        },
        pendiente_5m_cba: {
          identify: true,
          kml: false,
          title: "Pendiente 5m (IGN)",
          attributeDictionary: {
            GRAY_INDEX: "Pendiente (%)",
          },
        },
        pendiente_90m_cba: {
          identify: true,
          kml: false,
          title: "Pendiente 90m",
          attributeDictionary: {
            GRAY_INDEX: "Pendiente (%)",
          },
        },
        orientacion_5m_cba: {
          identify: true,
          kml: false,
          title: "Orientación 5m (IGN)",
          attributeDictionary: {
            GRAY_INDEX: "Orientación (pixel 5m)",
          },
        },
        orientacion_90m_cba: {
          identify: true,
          kml: false,
          title: "Orientación 90m",
          attributeDictionary: {
            GRAY_INDEX: "Orientación (pixel 90m)",
          },
        },
        provincia: {
          identify: false,
          kml: false,
        },
      },
    },
    "Mapa de Escuelas": {
      buscaService: {
        services: [
          "getubi",
          "getEstablecimientos",
          "getRadiosUrbanos",
          "getpornomycuenta",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },
        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Nombre de Establecimiento<br> \
      - Nombre de Localidad<br> \
      - Cuenta de Rentas<br> \
      - Nomenclatura Catastral Provincial<br> \
      Presione Enter para buscar.",
      },
      layers: {
        establecimientos_2020: {
          identify: true,
          title: "Establecimiento",
          attributeDictionary: {
            cueanexo: "CUE anexo",
            sector: "Sector",
            dependencia: "Dependencia",
            ambito: "Ámbito",
            departamento: "Departamento",
            localidad: "Localidad",
            calle: "Calle",
            nro: "Nro",
            modalidad: "Modalidad",
            oferta: "Oferta",
            establecimiento: "Establecimiento",
          },
          kml: true,
        },
        departamentos_estadisticas_educacion: {
          identify: true,
          title: "Estadísticas por Dpto",
          attributeDictionary: {
            codigo: "Código",
            nombre: "Nombre",
            estatal_municipal: "Estatal Municipal",
            estatal_nacional: "Estatal Nacional",
            estatal_provincial: "Estatal Provincial",
            privado_provincial: "Privado Provincial",
            total_general: "Total General",
          },
          kml: true,
        },
        radios_urbanos: {
          identify: false,
          kml: false,
        },
        provincia: {
          identify: false,
          kml: false,
        },
      },
    },
    "Variables Modelización Valor Tierra Urbana 2019": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        datos_muestra2019: {
          identify: true,
          title: "Datos de mercado ($/m²)",
          attributeDictionary: {
            vut: "Valor Unitario de la tierra ($/m2)",
            tipodevalor: "Tipo de valor",
            p_origen: "Fuente",
            tipodeinmueble: "Tipo de inmueble",
            situacionjuridica: "Situacion Juridica",
            valor: "Valor total",
            suploteurbano: "Superficie de lote",
            frente: "Frente",
            forma: "Forma",
            topografia: "Topografia",
            ubicacioncuadra: "Ubicación de la cuadra",
            supconstruida: "Superficie edificada",
            fechavalor: "Fecha del valor",
            moneda: "Tipo de moneda",
            carto_tipo: "tipo",
          },
          kml: false,
        },
        red_vial_2019: {
          identify: false,
        },
        tendencia_de_valor: {
          identify: false,
        },
        cartas_urbanas_2019: {
          identify: true,
          title: "Carta Valores Urbanos 2019",
          service: "/cuadriculaurbana",
          field: "nombre_hoja",
          kml: false,
        },
        ejes_vut_r2019: {
          identify: true,
          title: "Valor tierra urbana 2019 (D.G.C)",
          service: "/valorvut2019service",
          field: "id",
          kml: false,
        },
        vut_completo: {
          identify: false,
        },
        revaluos_2013: {
          identify: false,
        },
        revaluos_2008: {
          identify: false,
        },
        zonas_relevantes_r19: {
          identify: false,
        },
        zonas_picos_valor_r19: {
          identify: false,
        },
        espacio_verde: {
          identify: false,
        },
        parcelas_vut_2019: {
          identify: false,
        },
        parcelas_graf: {
          identify: true,
          title: "Parcela",
          service: "/newdataserv",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
        radios_urbanos: {
          identify: false,
        },
        manzana: {
          identify: false,
        },
      },
    },
    "Variables utilizadas en la Valuación de la Tierra Rural 2019 (Vig. 2020)": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        datos_mercado_rural2019: {
          identify: false,
          title: "Datos de mercado rural 2019 ($/ha)",
          service: "/valorurbanoservice",
          field: "nomenclatura",
          kml: false,
        },
        v_parcelas_rur_graf: {
          identify: true,
          title: "Parcela valuación rural",
          attributeDictionary: {
            Nomenclatura: "Nomenclatura",
            Nro_Cuenta: "Nro. Cuenta",
            Tipo_Parcela: "Tpo de parcela",
            Estado: "Estado",
            Superficie_Tierra_Rural: "Sup. del terreno",
            Superficie_Mejoras: "Superficie edificada",
            Valuacion_Tierra_Rural: "Valuación (vig. 2020)",
          },
          kml: false,
        },
        grilla_modif_201902: {
          identify: true,
          title: "Grilla con VUT modificado",
          attributeDictionary: {
            vut_2019: "VUT 2019",
            nvo_vut_2019: "Nuevo VUT",
          },
          kml: false,
        },
        celdas_ajustadas_rural2019: {
          identify: true,
          title: "Celdas con ajuste de valor",
          kml: false,

          attributeDictionary: {
            fid: "ID",
            variable_ajuste: "Variable ajuste",
            porc_ajuste: "Reducción del valor (%)",
            roja_otbn_porc: "Sup. Cat. Roja OTBN (%)",
            rec_escasa_porc: "Sup. bajo recurrencia escasa (%)",
            rec_leve_porc: "Sup. bajo recurrencia leve (%)",
            rec_media_porc: "Sup. Recurrencia de agua media (%)",
            rec_alta_porc: "Sup. Recurrencia de agua alta (%)",
            rec_severa_porc: "Sup. Recurrencia de agua severa (%)",
            cob_monte_porc: "Sup. Cobertura de monte (%)",
          },
        },

        analisis_shlomo: {
          identify: false,
          title: "Fragmentación urbana",
          kml: false,
          attributeDictionary: {
            nombre: "Nombre provincia",
          },
        },
        cartas_suelo_prov_ed190612: {
          identify: false,
          title: "Capacidad de Uso del Suelo",
          kml: false,
          attributeDictionary: {
            nombre: "Nombre provincia",
          },
        },
        cartas_suelo_prov_ed190612: {
          identify: false,
          title: "Índice de Productividad del Suelo",
          kml: false,
          attributeDictionary: {
            nombre: "Nombre provincia",
          },
        },
        recurrencia_anual_1984_2018_nd: {
          identify: false,
          title: "Recurrencia anual de agua superficial",
          kml: false,
          attributeDictionary: {
            nombre: "Nombre provincia",
          },
        },

        ds_dist_centro_urbano_500m: {
          identify: false,
          title: "Distancia a centro urbano",
          kml: false,
          attributeDictionary: {
            nombre: "Nombre provincia",
          },
        },
        ds_dist_red_vial_pavimentada_500m: {
          identify: false,
          title: "Distancia a red vial pavimentada",
          kml: false,
          attributeDictionary: {
            nombre: "Nombre provincia",
          },
        },
        dist_rio_princ_500m: {
          identify: false,
          title: "Distancia a río principal",
          kml: false,
          attributeDictionary: {
            nombre: "Nombre provincia",
          },
        },
        pp_anual_500m: {
          identify: false,
          title: "Precipitación media anual",
          kml: false,
          attributeDictionary: {
            nombre: "Nombre provincia",
          },
        },
        temp_media_anual_500: {
          identify: false,
          title: "Temperatura media anual",
          kml: false,
          attributeDictionary: {
            nombre: "Nombre provincia",
          },
        },
        altura_merit90m: {
          identify: false,
          title: "Altura del relieve (msnm)",
          kml: false,
          attributeDictionary: {
            nombre: "Nombre provincia",
          },
        },
        pendiente_porcentaje_merit90m: {
          identify: false,
          title: "Pendiente (%)",
          kml: false,
          attributeDictionary: {
            nombre: "Nombre provincia",
          },
        },
        variables_consulta_rural2019: {
          identify: true,
          title: "Consulta de variables",
          kml: false,
          attributeDictionary: {
            nro: "ID",
            id_2018: "ID (celda 2018)",
            celda_periurbana: "Pertenencia zona periurbana",
            parce_cantidad: "Cant. de parcelas (entorno 10km)",
            parce_sup_media: "Sup. mediana de parcelas (entorno 10km)",
            area_resguardo_agrop: "Pertenencia área resguardo ambiental",
            sup_cat_amarilla_otbn: "up. celda Categ. Amarilla OTBN)",
            sup_cat_roja_otbn: "% sup. celda Categ. Roja (OTBN)",
            area_natural_protegida: "Pertenencia área natural protegida",
            acc_riego: "Acceso a riego",
            rec_media_porc: "Sup. Recurrencia de agua media (%)",
            rec_alta_porc: "Sup. Recurrencia de agua alta (%)",
            rec_severa_porc: "Sup. Recurrencia de agua severa (%)",
          },
        },
        hojas_cuadricula2020: {
          identify: true,
          title: "Carta valores rurales 2019",
          kml: false,
          service: "/cuadricularural",
          field: "enlace",
        },
        valores_tierra_rural2020: {
          identify: false,
          title: "Valor de la tierra rural - Etiquetas",
          kml: false,
          attributeDictionary: {
            nombre: "Nombre provincia",
          },
        },
        valores_tierra_rural2020: {
          identify: false,
          title: "Valor de la tierra rural 2019 ($/ha)",
          kml: false,
          attributeDictionary: {
            nombre: "Nombre provincia",
          },
        },
        pedania: {
          identify: false,
          title: "Pedanía",
          kml: false,
          attributeDictionary: {
            nombre: "Nombre provincia",
          },
        },
        departamentos: {
          identify: false,
          title: "Departamentos",
          kml: false,
          attributeDictionary: {
            nombre: "Nombre provincia",
          },
        },
      },
    },

    "Valor de la Tierra Urbana 2019": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        parcelas_vut_2019: {
          identify: true,
          title: "Valuación urbana 2019 por parcela",
          service: "/valorurbanoservice",
          field: "nomenclatura",
          kml: true,
        },
        par_no_urbana: {
          identify: true,
          title: "Base parcelaria no urbana",
          service: "/parcelascatastroservice",
          field: "par_idparcela",
          kml: true,
        },
        radios_urbanos: {
          identify: false,
          title: "Radios Urbanos",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre provincia",
          },
        },

        cartas_urbanas_2019: {
          identify: true,
          title: "Carta Valores Urbanos 2019",
          service: "/cuadriculaurbana",
          field: "nombre_hoja",
          kml: false,
        },
        ejes_vut: {
          identify: false,
          title: "Valor Tierra Urbana 2019",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre provincia",
          },
        },
      },
    },
    "Valor de la Tierra Rural 2019": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        valores_tierra_rural2020: {
          identify: false,
          title: "Parcela",
          service: "/newdataserv",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
        provincia: {
          identify: false,
          title: "Provincia",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre provincia",
          },
        },
        pedania: {
          identify: false,
          title: "Provincia",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre provincia",
          },
        },
        departamentos: {
          identify: false,
          title: "Provincia",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre provincia",
          },
        },
        radios_urbanos: {
          identify: false,
          title: "Provincia",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre provincia",
          },
        },
        v_parcelas_rur_graf: {
          identify: true,
          title: "Parcela",
          kml: true,
          attributeDictionary: {
            Nomenclatura: "Nomenclatura Catastral",
            Nro_Cuenta: "Número de cuenta",
            Tipo_Parcela: "Tipo de inmueble",
            Estado: "Estado del inmueble",
            Superficie_Tierra_Rural: "Sup. tierra rural",
            Superficie_Mejoras: "Sup. edificada",
            Valuacion_Tierra_Rural: "Valuación terreno 2019",
          },
        },
        hojas_cuadricula2020: {
          identify: true,
          title: "Carta de Valores Rurales",
          service: "/cuadricularural",
          field: "enlace",
          kml: false,
        },
      },
    },
    "Impuesto Inmobiliario 2020 (por estado)": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },
        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        parcelas_graf: {
          identify: true,
          title: "Parcela",
          service: "/newdataserv",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },

        provincia: {
          identify: false,
          title: "Provincia",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre provincia",
          },
        },
        topes_urbanos_edificados_2020_parcelas_graf_v3: {
          identify: true,
          title: "Aumento",
          kml: false,
          attributeDictionary: {
            cuenta: "Cuenta",
            nomenclatura: "Nomenclatura",
            denominacion: "Titular s/DGR",
            estado: "Estado",
            base_imponible_2019: "Base imponible 2019 ($)",
            impuesto_2019: "Impuesto 2019 ($)",
            alicuota_efectiva_2019: "Alícuota efectiva 2019 (%)",
            base_imponible_2020: "Base imponible 2020 ($)",
            aumento_pesos: "Aumento 2020 en $",
            aumento_porcentual: "Aumento 2020 en %",
            impuesto_2020_con_tope: "Imp. 2020 con cota ($)",
            impuesto_2020_libre: "Imp. 2020 sin cota ($)",
            valor_cota: "Valor cota ($)",
            descuento_porcentaje: "Porcentaje de descuento",
            alicuota_efectiva_2020: "Alícuota efectiva 2020 (%)",
          },
        },
        topes_urbanos_baldios_2020_parcelas_graf_v3: {
          identify: true,
          title: "Aumento",
          kml: false,
          attributeDictionary: {
            cuenta: "Cuenta",
            nomenclatura: "Nomenclatura",
            denominacion: "Titular s/DGR",
            estado: "Estado",
            base_imponible_2019: "Base imponible 2019 ($)",
            impuesto_2019: "Impuesto 2019 ($)",
            alicuota_efectiva_2019: "Alícuota efectiva 2019 (%)",
            base_imponible_2020: "Base imponible 2020 ($)",
            aumento_pesos: "Aumento 2020 en $",
            aumento_porcentual: "Aumento 2020 en %",
            impuesto_2020_con_tope: "Imp. 2020 con cota ($)",
            impuesto_2020_libre: "Imp. 2020 sin cota ($)",
            valor_cota: "Valor cota ($)",
            descuento_porcentaje: "Porcentaje de descuento",
            alicuota_efectiva_2020: "Alícuota efectiva 2020 (%)",
          },
        },
        topes_provincia_2020_parcelas_graf_v3: {
          identify: true,
          title: "Aumento",
          kml: true,
          attributeDictionary: {
            cuenta: "Cuenta",
            nomenclatura: "Nomenclatura",
            denominacion: "Titular s/DGR",
            estado: "Estado",
            base_imponible_2019: "Base imponible 2019 ($)",
            impuesto_2019: "Impuesto 2019 ($)",
            alicuota_efectiva_2019: "Alícuota efectiva 2019 (%)",
            base_imponible_2020: "Base imponible 2020 ($)",
            aumento_pesos: "Aumento 2020 en $",
            aumento_porcentual: "Aumento 2020 en %",
            impuesto_2020_con_tope: "Imp. 2020 con cota ($)",
            impuesto_2020_libre: "Imp. 2020 sin cota ($)",
            valor_cota: "Valor cota ($)",
            descuento_porcentaje: "Porcentaje de descuento",
            alicuota_efectiva_2020: "Alícuota efectiva 2020 (%)",
          },
        },
      },
    },
    "Impuesto Inmobiliario 2020": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        parcelas_graf: {
          identify: true,
          title: "Parcela",
          service: "/newdataserv",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },

        provincia: {
          identify: false,
          title: "Provincia",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre provincia",
          },
        },
        topes_urbanos_edificados_2020_parcelas_graf_v3: {
          identify: true,
          title: "Aumento",
          kml: true,
          attributeDictionary: {
            cuenta: "Cuenta",
            nomenclatura: "Nomenclatura",
            denominacion: "Titular s/DGR",
            estado: "Estado",
            base_imponible_2019: "Base imponible 2019 ($)",
            impuesto_2019: "Impuesto 2019 ($)",
            alicuota_efectiva_2019: "Alícuota efectiva 2019 (%)",
            base_imponible_2020: "Base imponible 2020 ($)",
            aumento_pesos: "Aumento 2020 en $",
            aumento_porcentual: "Aumento 2020 en %",
            impuesto_2020_con_tope: "Imp. 2020 con cota ($)",
            impuesto_2020_libre: "Imp. 2020 sin cota ($)",
            valor_cota: "Valor cota ($)",
            descuento_porcentaje: "Porcentaje de descuento",
            alicuota_efectiva_2020: "Alícuota efectiva 2020 (%)",
          },
        },
        topes_urbanos_baldios_2020_parcelas_graf_v3: {
          identify: true,
          title: "Aumento",
          kml: true,
          attributeDictionary: {
            cuenta: "Cuenta",
            nomenclatura: "Nomenclatura",
            denominacion: "Titular s/DGR",
            estado: "Estado",
            base_imponible_2019: "Base imponible 2019 ($)",
            impuesto_2019: "Impuesto 2019 ($)",
            alicuota_efectiva_2019: "Alícuota efectiva 2019 (%)",
            base_imponible_2020: "Base imponible 2020 ($)",
            aumento_pesos: "Aumento 2020 en $",
            aumento_porcentual: "Aumento 2020 en %",
            impuesto_2020_con_tope: "Imp. 2020 con cota ($)",
            impuesto_2020_libre: "Imp. 2020 sin cota ($)",
            valor_cota: "Valor cota ($)",
            descuento_porcentaje: "Porcentaje de descuento",
            alicuota_efectiva_2020: "Alícuota efectiva 2020 (%)",
          },
        },
        topes_provincia_2020_parcelas_graf_v3: {
          identify: true,
          title: "Aumento",
          kml: true,
          attributeDictionary: {
            cuenta: "Cuenta",
            nomenclatura: "Nomenclatura",
            denominacion: "Titular s/DGR",
            estado: "Estado",
            base_imponible_2019: "Base imponible 2019 ($)",
            impuesto_2019: "Impuesto 2019 ($)",
            alicuota_efectiva_2019: "Alícuota efectiva 2019 (%)",
            base_imponible_2020: "Base imponible 2020 ($)",
            aumento_pesos: "Aumento 2020 en $",
            aumento_porcentual: "Aumento 2020 en %",
            impuesto_2020_con_tope: "Imp. 2020 con cota ($)",
            impuesto_2020_libre: "Imp. 2020 sin cota ($)",
            valor_cota: "Valor cota ($)",
            descuento_porcentaje: "Porcentaje de descuento",
            alicuota_efectiva_2020: "Alícuota efectiva 2020 (%)",
          },
        },
      },
    },
    "Impuesto Inmobiliario Rural 2020 (Esc. 5)": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        parcelas_graf: {
          identify: true,
          title: "Parcela",
          service: "/newdataserv",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },

        provincia: {
          identify: false,
          title: "Provincia",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre provincia",
          },
        },
        topes_rural_2020_graf: {
          identify: true,
          title: "Aumento",
          kml: true,
          attributeDictionary: {
            cuenta: "Cuenta",
            grupo: "Nomenclatura",
            tipo_grupo_2020: "Grupo / Criterio",
            bi_2019: "Base imponible 2019 ($)",
            imp_2019: "Impuesto 2019 ($)",
            bi_2020: "Base imponible 2020 ($)",
            impuesto_2020_libre: "Impuesto 2020 libre ($)",
            valor_cota: "Valor cota ($)",
            impuesto_2020_con_tope: "Impuesto 2020 con tope ($)",
            alicuota_efectiva_2020: "Alícuota efectiva 2020",
            incremento_pesos: "Aumento 2020 en $",
            incremento_porcentaje: "Aumento 2020 en %",
            sup_ha: "Superficie (Ha)",
          },
        },
      },
    },
    "Impuesto Inmobiliario 2020 (escenario 3)": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        parcelas_graf: {
          identify: true,
          title: "Parcela",
          service: "/newdataserv",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },

        pedania: {
          identify: false,
          title: "Pedania",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre pedanía",
          },
        },
        topes_provincia_2019_graf: {
          identify: true,
          title: "Descuentos / Cotas",
          kml: true,
          attributeDictionary: {
            cuenta: "Cuenta",
            nomenclatura: "Nomenclatura",
            cant_cuentas: "Cantidad de cuentas",
            tipo: "Tipo / Estado",
            base_imponible: "Base imponible 2019 ($)",
            monto_bruto: "Importe bruto 2019 ($)",
            descuento: "Disminución por ley ($)",
            monto_neto: "Impuesto 2019 ($)",
            alicuota_efectiva: "Alícuota efectiva (%)",
            porcentaje_descuento: "Porc. de descuento",
          },
        },
        topes_provincia_2020_parcelas_graf_vista: {
          identify: true,
          title: "Aumento",
          kml: true,
          attributeDictionary: {
            cuenta: "Cuenta",
            nomenclatura: "Nomenclatura",
            cant_cuentas: "Cantidad de cuentas",
            estado: "Tipo / Estado",
            base_imponible_2019: "Base imponible 2019 ($)",
            impuesto_2019: "Impuesto 2019 ($)",
            base_imponible_2020: "Base imponible 2020 ($)",
            impuesto_2020: "Impuesto 2020 ($)",
            aumento_pesos: "Aumento 2020 en $",
            aumento_porcentual: "Aumento 2020 en %",
          },
        },
        provincia: {
          identify: false,
          title: "Provincia",
          kml: true,
        },
        Manzanas: {
          identify: false,
          title: "Manzanas",
          kml: true,
          attributeDictionary: {
            nomenclatura: "Nomenclatura",
          },
        },
        departamentos: {
          identify: false,
          title: "Departamentos",
          kml: true,
          attributeDictionary: {
            codigo: "Código departamental",
            nombre: "Nombre departamento",
          },
        },
      },
    },
    "Parcelas de grandes superficies": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        provincia: {
          identify: false,
        },
        analisis_cincomil_alfa: {
          title: "Parcela más de Cinco mil Hectáreas Registro Alfanumérico",
          identify: true,
          kml: false,
          attributeDictionary: {
            cuenta: "Nro de Cuenta",
            nomenclatura: "Nomenclatura",
            valuación_tierra_rural: "Valuación Tierra Rural",
            sup_ha: "Superficie Ha",
            geo_ha: "Superficie Geométrica",
            monte: "Monte",
            arbustal: "Arbustal",
            pastizal_natural: "Pastizal Natural",
            pastizal_rocas: "Pastizal Rocas",
            rocas: "Rocas",
            suelo_desnudo: "Suelo Desnudo",
            salina: "Salina",
            cuerpo_agua: "Cuerpo Agua",
            anegable: "Anegable",
            curso_agua: "Curso Agua",
            urbana_consolidada: "Urbana Consolidada",
            urbana_en_consolidacion: "Urbana en Consolidacion",
            urbana_dispersa: "Urbana Dispersa",
            infraestructura_vial: "Infraestructura Vial",
            cultivo_anual_secano: "Cultivo Anual Secano",
            cultivo_anual_irrigado: "Cultivo Anual Irrigado",
            pastura_implantada: "Pastura Implantada",
            pastura_manejada: "Pastura Manejada",
            maderables: "Maderables",
            perenne_irrigada: "Perenne Irrigada",
            valor_promedio_ha: "Valor Promedio x Ha",
            porcentaje_provincia: "Porcentaje en la Provincia",
          },
        },
        analisis_cincomil_graf: {
          title: "Parcela más de Cinco mil Hectáreas Registro Gráfico",
          identify: true,
          kml: false,
          attributeDictionary: {
            cuenta: "Nro de Cuenta",
            nomenclatura: "Nomenclatura",
            valuación_tierra_rural: "Valuación Tierra Rural",
            sup_ha: "Superficie Ha",
            geo_ha: "Superficie Geométrica",
            monte: "Monte",
            arbustal: "Arbustal",
            pastizal_natural: "Pastizal Natural",
            pastizal_rocas: "Pastizal Rocas",
            rocas: "Rocas",
            suelo_desnudo: "Suelo Desnudo",
            salina: "Salina",
            cuerpo_agua: "Cuerpo Agua",
            anegable: "Anegable",
            curso_agua: "Curso Agua",
            urbana_consolidada: "Urbana Consolidada",
            urbana_en_consolidacion: "Urbana en Consolidacion",
            urbana_dispersa: "Urbana Dispersa",
            infraestructura_vial: "Infraestructura Vial",
            cultivo_anual_secano: "Cultivo Anual Secano",
            cultivo_anual_irrigado: "Cultivo Anual Irrigado",
            pastura_implantada: "Pastura Implantada",
            pastura_manejada: "Pastura Manejada",
            maderables: "Maderables",
            perenne_irrigada: "Perenne Irrigada",
            valor_promedio_ha: "Valor Promedio x Ha",
            porcentaje_provincia: "Porcentaje en la Provincia",
          },
        },
        analisis_mil_alfa: {
          title: "Parcela más de mil Hectáreas Registro Alfanumérico",
          identify: true,
          kml: false,
          attributeDictionary: {
            cuenta: "Nro de Cuenta",
            nomenclatura: "Nomenclatura",
            valuación_tierra_rural: "Valuación Tierra Rural",
            sup_ha: "Superficie Ha",
            geo_ha: "Superficie Geométrica",
            monte: "Monte",
            arbustal: "Arbustal",
            pastizal_natural: "Pastizal Natural",
            pastizal_rocas: "Pastizal Rocas",
            rocas: "Rocas",
            suelo_desnudo: "Suelo Desnudo",
            salina: "Salina",
            cuerpo_agua: "Cuerpo Agua",
            anegable: "Anegable",
            curso_agua: "Curso Agua",
            urbana_consolidada: "Urbana Consolidada",
            urbana_en_consolidacion: "Urbana en Consolidacion",
            urbana_dispersa: "Urbana Dispersa",
            infraestructura_vial: "Infraestructura Vial",
            cultivo_anual_secano: "Cultivo Anual Secano",
            cultivo_anual_irrigado: "Cultivo Anual Irrigado",
            pastura_implantada: "Pastura Implantada",
            pastura_manejada: "Pastura Manejada",
            maderables: "Maderables",
            perenne_irrigada: "Perenne Irrigada",
            valor_promedio_ha: "Valor Promedio x Ha",
            porcentaje_provincia: "Porcentaje en la Provincia",
          },
        },
        analisis_mil_graf: {
          title: "Parcela más de mil Hectáreas Registro Gráfico",
          identify: true,
          kml: false,
          attributeDictionary: {
            cuenta: "Nro de Cuenta",
            nomenclatura: "Nomenclatura",
            valuación_tierra_rural: "Valuación Tierra Rural",
            sup_ha: "Superficie Ha",
            geo_ha: "Superficie Geométrica",
            monte: "Monte",
            arbustal: "Arbustal",
            pastizal_natural: "Pastizal Natural",
            pastizal_rocas: "Pastizal Rocas",
            rocas: "Rocas",
            suelo_desnudo: "Suelo Desnudo",
            salina: "Salina",
            cuerpo_agua: "Cuerpo Agua",
            anegable: "Anegable",
            curso_agua: "Curso Agua",
            urbana_consolidada: "Urbana Consolidada",
            urbana_en_consolidacion: "Urbana en Consolidacion",
            urbana_dispersa: "Urbana Dispersa",
            infraestructura_vial: "Infraestructura Vial",
            cultivo_anual_secano: "Cultivo Anual Secano",
            cultivo_anual_irrigado: "Cultivo Anual Irrigado",
            pastura_implantada: "Pastura Implantada",
            pastura_manejada: "Pastura Manejada",
            maderables: "Maderables",
            perenne_irrigada: "Perenne Irrigada",
            valor_promedio_ha: "Valor Promedio x Ha",
            porcentaje_provincia: "Porcentaje en la Provincia",
          },
        },
      },
    },
    "Plan Metropolitano de Usos del Suelo - Ley 9841": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      dataOwner: {
        name: "Instituto de Planificación del Área Metropolitana",
        url: "http://minaaysp.cba.gov.ar/iplam",
      },

      layers: {
        iplam_urb_consolidada: {
          title: "Área Urbana Consolidada.",
          identify: true,
          kml: false,
          attributeDictionary: {
            descrip: "Descripción",
            superficie: "Superficie total (Ha)",
          },
        },
        iplam_urb_prioritaria: {
          title: "Área de Urbanización Prioritaria",
          identify: true,
          kml: false,
          attributeDictionary: {
            descrip: "Descripción",
            superficie: "Superficie total (Ha)",
          },
        },
        iplam_urb_diferida: {
          title: "Área de Urbanización Diferida",
          identify: true,
          kml: false,
          attributeDictionary: {
            descrip: "Descripción",
            superficie: "Superficie total (Ha)",
          },
        },
        iplam_mixta_productiva: {
          title: "Área Mixta de Promoción para Act. Productiva",
          identify: true,
          kml: false,
          attributeDictionary: {
            descrip: "Descripción",
            superficie: "Superficie total (Ha)",
          },
        },
        iplam_natural_protegida: {
          title: "Área Natural Protegida",
          identify: true,
          kml: false,
          attributeDictionary: {
            descrip: "Descripción",
            superficie: "Superficie total (Ha)",
          },
        },
        iplam_verde_recreativa: {
          title: "Área Verde Recreativa",
          identify: true,
          kml: false,
          attributeDictionary: {
            descrip: "Descripción",
            superficie: "Superficie total (Ha)",
          },
        },
        iplam_agro_cat_I: {
          title: "Área de Prod. Agrop. Cat. I",
          identify: true,
          kml: false,
          attributeDictionary: {
            descrip: "Descripción",
            superficie: "Superficie total (Ha)",
          },
        },
        iplam_agro_cat_2: {
          title: "Área de Prod. Agrop. Cat. II",
          identify: true,
          kml: false,
          attributeDictionary: {
            descrip: "Descripción",
            superficie: "Superficie total (Ha)",
          },
        },
        iplam_ind_incompatible: {
          title: "Área Industrial Incompatible",
          identify: true,
          kml: false,
          attributeDictionary: {
            descrip: "Descripción",
            superficie: "Superficie total (Ha)",
          },
        },
        iplam_valor_estrategico: {
          title: "Área de Valor Estratégico",
          identify: true,
          kml: false,
          attributeDictionary: {
            descrip: "Descripción",
            superficie: "Superficie total (Ha)",
          },
        },
        iplam_especial: {
          title: "Área Especial",
          identify: true,
          kml: false,
          attributeDictionary: {
            descrip: "Descripción",
            superficie: "Superficie total (Ha)",
          },
        },
        iplam_riesgo: {
          title: "Área de Riesgo",
          identify: true,
          kml: false,
          attributeDictionary: {
            descrip: "Descripción",
            superficie: "Superficie total (Ha)",
          },
        },
        iplam_colectora: {
          title: "Espacio Colectoras",
          identify: true,
          kml: false,
          attributeDictionary: {
            descrip: "Descripción",
            superficie: "Superficie total (Ha)",
          },
        },
        iplam_munic_zonas: {
          title: "Estadisticas por municipios",
          identify: true,
          kml: false,
          attributeDictionary: {
            key: "Nomenclatura",
            name: "Municipio",
            area_ha: "Superficie Radio Urbano",
            tipo_gobie: "Tipo de Gobierno",
            urb_consol_perc: "Urbana Consolidada (%)",
            urb_consol: "Urbana Consolidada (Ha)",
            urb_prioritaria_perc: "Urbanización Prioritaria (%)",
            urb_prioritaria: "Urbanización Prioritaria (Ha)",
            urb_dif_perc: "Urbanización Diferida (%)",
            urb_dif: "Urbanización Diferida (Ha)",
            mixta_prod_perc: "Mixta Productiva (%)",
            mixta_prod: "Mixta Productiva (Ha)",
            nat_protegida_perc: "Natural Protegida (%)",
            nat_protegida: "Natural Protegida (Ha)",
            verde_perc: "Verde Recreativa (%)",
            verde: "Verde Recreativa (Ha)",
            agrop_catII_perc: "Prod. Agropecuaria Contaminante (%)",
            agrop_catII: "Prod. Agropecuaria Contaminante (Ha)",
            cat_i_perc: "Prod. Agropecuaria No Contaminante (%)",
            agrop_cat_i: "Prod. Agropecuaria No Contaminante (Ha)",
            ind_incompat_perc: "Industrial Incompatible (%)",
            ind_incompat: "Industrial Incompatible (Ha)",
            valor_estrat_perc: "Valor Estratégico (%)",
            valor_estrat: "Valor Estratégico (Ha)",
            especial_perc: "Área Especial (%)",
            especial: "Área Especial (Ha)",
            riesgo_perc: "Área de Riesgo (%)",
            riesgo: "Área de Riesgo (Ha)",
            colectora_perc: "Área Colectora (%)",
            colectora: "Área Colectora (Ha)",
          },
        },
        parcelas_graf: {
          title: "Parcela",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
      },
    },
    "Cartas de Suelo de la Provincia de Córdoba": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        cartas_suelo_prov_ed190612: {
          title: "Carta de Suelo",
          identify: true,
          kml: false,
          attributeDictionary: {
            unidad_cartografica: "Unidad Cartografica",
            cu: "Clase",
            scu: "Subclase",
            cu_scu: "Clase + Subclase",
            ip: "Indice de Productividad",
          },
        },
        escalas_cartograficas: {
          identify: false,
        },
        departamentos: {
          identify: false,
        },
        pedania: {
          identify: false,
        },
        parcelas_graf: {
          title: "Parcela",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
      },
    },

    "Limitantes de Suelo de la Provincia de Córdoba": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        parcelas_graf: {
          title: "Parcela",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
      },
    },

    "Fragmentación Urbana - Nivel Detallado": {
      buscaService: {
        services: ["getubi", "getLocalidadesYParajes"],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },
        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      Presione Enter para buscar.",
      },
      layers: {
        estadisticas_departamento_fragmentacion: {
          title: "Estadísticas por depto.",
          identify: true,
          kml: false,
          attributeDictionary: {
            nombre: "Departamento",
            sup_ha_dep: "Superficie (Ha)",
            uec: "Urbano edificado compacto (%)",
            ued: "Urbano edificado disperso (%)",
            re: "Rural edificado (%)",
            eau: "Espacio abierto urbanizado (%)",
            bu: "Borde urbano (%)",
            era: "Espacio abierto rural (%)",
            agua: "Agua (%)",
          },
        },
        estadisticas_localidad_fragmentacion: {
          title: "Estadísticas por localidad",
          identify: true,
          kml: false,
          attributeDictionary: {
            localidad: "Localidad",
            sup_ha_ru: "Superficie (Ha)",
            uec: "Urbano edificado compacto (%)",
            ued: "Urbano edificado disperso (%)",
            re: "Rural edificado (%)",
            eau: "Espacio abierto urbanizado (%)",
            bu: "Borde urbano (%)",
            era: "Espacio abierto rural (%)",
            agua: "Agua (%)",
          },
        },
        provincia: {
          identify: false,
        },
        analisis_shlomo: {
          identify: false,
        },
      },
    },
    "Fragmentación Urbana - Nivel General": {
      buscaService: {
        services: ["getubi", "getLocalidadesYParajes"],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      Presione Enter para buscar.",
      },
      layers: {
        estadisticas_localidad_intensidad: {
          title: "Estadísticas por localidad",
          identify: true,
          kml: false,
          attributeDictionary: {
            localidad: "Localidad",
            superf_ha: "Superficie (Ha)",
            iur: "Interfaz urbano rural (%)",
            ued: "Urbano edificado disperso (%)",
            uec: "Urbano edificado compacto (%)",
          },
        },
        provincia: {
          identify: false,
        },
        niveles_ciudad: {
          identify: false,
        },
        pixel_construido_2203: {
          identify: false,
        },
      },
    },
    "Mapa de Desmontes No Autorizados": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        desmonte_2015: {
          title: "Desmonte Año 2015",
          identify: true,
          kml: true,
          attributeDictionary: {
            intervencion: "Intervención",
            depto: "Departamento",
            sup_ha: "Sup. en ha",
            mes: "Mes",
          },
        },
        desmonte_2016: {
          title: "Desmonte Año 2016",
          identify: true,
          kml: true,
          attributeDictionary: {
            intervencion: "Intervención",
            depto: "Departamento",
            sup_ha: "Sup. en ha",
            mes: "Mes",
          },
        },
        desmonte_2017: {
          title: "Desmonte Año 2017",
          identify: true,
          kml: true,
          attributeDictionary: {
            intervencion: "Intervención",
            depto: "Departamento",
            sup_ha: "Sup. en ha",
            mes: "Mes",
          },
        },
        parcelas_graf: {
          title: "Parcela",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
        provincia: {
          identify: false,
        },
        departamentos: {
          identify: false,
        },
      },
    },
    "Coberturas del Suelo (Land Cover) 2017 / 2018": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        Nivel2_28_dic_2018_30m: {
          identify: true,
          service: "/coberturanivel2",
          field: "GRAY_INDEX",
          kml: false,
          title: "Categoría Nivel 2",
        },

        Nivel25_28_dic_2018_30m: {
          identify: true,
          service: "/coberturanivel25",
          field: "GRAY_INDEX",
          kml: false,
          title: "Categoría Nivel 2.5",
        },

        Nivel1_28_dic_2018_30m: {
          identify: true,
          service: "/coberturanivel1",
          field: "GRAY_INDEX",
          kml: false,
          title: "Categoría Nivel 1",
        },

        Relieve: {
          identify: true,
          service: "/coberturarelieve",
          field: "GRAY_INDEX",
          kml: false,
          title: "Relieve",
        },

        radios_infra_urb_mapa: {
          title: "Radios Urbanos",
          identify: true,
          kml: true,
          attributeDictionary: {
            radio_urbano: "Localidad",
            sup_urb: "Superficie radio urbano",
            porc_cat11: "Zona urbana consolidada",
            porc_cat12: "Zona urbana en proceso de consolidación",
            porc_cat13: "Zona urbana sin consolidar",
            porc_cat14: "Infraestructura vial",
          },
        },
        parcelas_graf: {
          title: "Parcela",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
      },
    },

    "Coberturas Agrícolas 2017 / 2018": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        Nivel3_28_dic_2018_30m_completo: {
          identify: true,
          service: "/coberturanivel3",
          field: "GRAY_INDEX",
          kml: false,
          title: "Categoría Nivel 3",
        },
        cultivos_por_dpto_mapa: {
          title: "Cobertura Por Depto.",
          identify: true,
          kml: true,
          attributeDictionary: {
            nombre: "Departamento",
            sup_cultivada: "Superficie cultivada",
            sup_trigo: "Trigo (sup)",
            porc_trigo: "Trigo (%)",
            sup_maiz: "Maíz (sup)",
            porc_maiz: "Maíz (%)",
            sup_soja: "Soja (sup)",
            porc_soja: "Soja (%)",
            sup_mani: "Maní (sup)",
            porc_mani: "Maní (%)",
            sup_sorgo: "Sorgo (sup)",
            porc_sorgo: "Sorgo (%)",
            porc_tr_mz: "Trigo-Maíz (%)",
            sup_tr_mz: "Trigo-Maíz (sup)",
            sup_tr_sj: "Trigo-Soja (sup)",
            porc_tr_sj: "Trigo-Soja (%)",
            sup_dpto: "Superfice departamento",
          },
        },
        parcelas_graf: {
          title: "Parcela",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
      },
    },

    "Áreas Naturales Protegidas": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        areas_naturales: {
          title: "Área Natural",
          identify: true,
          kml: true,
          attributeDictionary: {
            dominio: "Propietario",
            nombre: "Nombre",
            normativa: "Normativa",
            tipo: "Tipo de Área",
          },
        },
        regiones_naturales: {
          title: "Región Natural",
          identify: true,
          kml: true,
          attributeDictionary: {
            nombre: "Nombre",
          },
        },
        provincia: {
          title: "Parcela",
          identify: false,
        },
        parcelas_graf: {
          title: "Parcela",
          identify: true,
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
        },
      },
    },

    "Impacto Revalúo de la Tierra 2019": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },

      layers: {
        v_parcelas_impacto: {
          title: "Aumento VUT por parcela",
          identify: true,
          service: "/impactoservice",
          kml: false,
          field: "par_idparcela",
          attributeDictionary: {
            departamento: "Departamento",
            pedania: "Pedanía",
            localidad: "Localidad",
            Nomenclatura: "Nomenclatura",
            Nro_Cuenta: "Número de Cuenta",
            Tipo_Parcela: "Tipo de Parcela",
            Tipo_Valuacion: "Tipo de Valuación",
            Estado: "Estado",
            vut_vigente: "Vut Vigente",
            fxf: "Coeficiente de frente y fondo",
            Superficie_Tierra: "Superficie Terreno 2019",
            Valuacion_Tierra: "Valuación Terreno 2019",
            Superficie_Tierra_Rural: "Superficie de Tierra Rural (ha)",
            Valuacion_Tierra_Rural: "Valuacion de Tierra de Rural 2019",
            dif_70: "Aumento de VUT en veces",
            val_terreno_2017: "Valuación Terreno 2017",
            val_terreno_2018: "Valuación Terreno 2018",
            Superficie_Mejoras: "Superficie de Mejoras",
            Valuacion_Mejoras: "Valuación de Mejoras 2019",
            Valuacion: "Valuación Total 2019",
            Cantidad_Cuentas: "Cantidad de cuentas asociadas",
          },
        },
        valor_urbano_por_localidad: {
          title: "Aumento impositivo por localidad",
          identify: true,
          kml: false,
          attributeDictionary: {
            departamen: "Departamento",
            localidad: "Localidad",
            incr_imp_l: "Incremento impositivo localidad",
            cant_ctas: "Cantidad de cuentas",
            imp_2019: "Impuesto 2019",
            imp_2018: "Impuesto 2018",
            max_incr: "Incremento máximo promedio",
            min_incr: "Incremento mínimo promedio",
            prom_incr: "Incremento promedio por cuenta",
            mediana: "Mediana del incremento",
          },
        },
        valor_urbano_por_depto: {
          title: "Aumento VUT urbano por departamento (en veces)",
          identify: true,
          kml: false,
          attributeDictionary: {
            nombre1: "Nombre",
            cant_ctas: "Cantidad de Cuentas",
            valor_tierra_2019: "Total Valor Tierra 2019",
            valor_tierra_2018: "Total Valor Tierra 2018",
            incr_vut_p: "Incremento VUT en veces",
            incr_max_p: "Incremento máximo promedio",
            incr_min_p: "Incremento mínimo promedio",
            incr_prom_: "Incremento promedio",
            mediana: "Mediana del incremento",
            part_depto: "Participación del departamento",
          },
        },
        valor_rural_por_depto: {
          title: "Aumento VUT rural por departamento (en veces)",
          identify: true,
          kml: false,
          attributeDictionary: {
            nombre1: "Nombre",
            cant_ctas: "Cantidad de Cuentas",
            valor_tierra_2019: "Total Valor Tierra 2019",
            valor_tierra_2018: "Total Valor Tierra 2018",
            incr_vut_p: "Incremento VUT en veces",
            incr_max_p: "Incremento máximo promedio",
            incr_min_p: "Incremento mínimo promedio",
            incr_prom_: "Incremento promedio",
            mediana: "Mediana del incremento",
            part_depto: "Participación del departamento",
          },
        },
      },
    },

    "Variables utilizadas en la estimación del Valor Unitario de la Tierra Rural": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        landcover_nivel2: {
          identify: true,
          service: "/landcovernivel2",
          field: "Rango",
          kml: false,
          title: "Cobertura de Suelo",
        },
        muestra_rural_mapa: {
          identify: false,
        },

        celdas_parament_agua: {
          identify: true,
          title: "Ajuste por agua",
          kml: false,
          attributeDictionary: {
            recurrencia_60: "Sup. Recurrencia de agua media (%)",
            recurrencia_80: "Sup. Recurrencia de agua alta (%)",
            recurrencia_100: "Sup. Recurrencia de agua severa (%)",
            n2_cob9: "Sup. Cobertura de cuerpo de agua (%)",
            porc_reduccion: "Reducción del valor (%)",
          },
        },
        parcelas_desmejora: {
          identify: true,
          title: "Parcela Val. Rural - Análisis desmejora",
          kml: false,
          attributeDictionary: {
            cuenta: "N° de Cuenta",
            nomenclatura: "Nomenclatura",
            pe: "PE",
            n: "Cant. casos entorno",
            porc_reduccion: "% reducción",
            var_ajuste: "Variable ajuste",
            porc_rec_anual: "% sup. Recurrencia Agua",
            porc_agua: "% sup. Cob. Agua",
            porc_monte: "% sup. Cob. Monte",
            porc_cat4_otbn: "% sup. Cat. Roja OTBN",
            pert_peri: "Pert. Periurbano",
          },
        },
        celdas_paramet_bosque: {
          identify: true,
          title: "Ajuste por bosque",
          kml: false,
          attributeDictionary: {
            cat_otbn4: "Sup. Cat. Roja OTBN (%)",
            n2_cob1_2: "Sup. Cobertura de monte (%)",
            porc_reduccion: "Reducción del valor (%)",
          },
        },
        pred_rural_final: {
          identify: false,
          title: "pred_rural_final)",
        },

        ph: {
          identify: true,
          title: "pH",
          service: "/ph",
          field: "pH",
          kml: false,
        },
        potasio: {
          identify: true,
          title: "Potasio",
          service: "/potasio",
          field: "value",
          kml: false,
        },
        morganica: {
          identify: true,
          title: "Materia Orgánica",
          service: "/morganica",
          field: "value",
          kml: false,
        },
        nitrogeno: {
          identify: true,
          title: "Nitrógeno",
          service: "/nitrogenototal",
          field: "value",
          kml: false,
        },
        fosforo: {
          identify: true,
          title: "Fósforo",
          service: "/fosforo",
          field: "value",
          kml: false,
        },
        deficit_hidrico: {
          identify: true,
          title: "Déficit Hídrico",
          service: "/deficithidrico",
          field: "value",
          kml: false,
        },
        precipitacion: {
          identify: true,
          title: "Precipitacion Media Anual",
          service: "/precipitacionmediaanual",
          field: "value",
          kml: false,
        },
        ds_recurrencia: {
          identify: true,
          title: "Agua superficial - Recurrencia anual",
          service: "/aguasuperficial",
          field: "value",
          kml: false,
        },
        distancia_redvial: {
          identify: true,
          title: "Distancia red vial pavimentada",
          service: "/distanciaredvialpavimentada",
          field: "value",
          kml: false,
        },
        ds_dist_urbano: {
          identify: true,
          title: "Distancia centro urbano (Mayor a 2.000 habitantes)",
          service: "/distanciacentrourbano",
          field: "value",
          kml: false,
        },
        ds_dist_cacopio: {
          identify: true,
          title: "Distancia a localidad con centro de acopio",
          service: "/distanciacentroacopio",
          field: "value",
          kml: false,
        },
        dem: {
          identify: true,
          title: "Distancia a Altura sobre el nivel del mar",
          service: "/alturasobreniveldelmar",
          field: "value",
          kml: false,
        },
        pendiente: {
          identify: true,
          title: "Distancia a Pendiente del Terreno",
          service: "/pendientedelterreno",
          field: "value",
          kml: false,
        },
        parcelas_rur_activas: {
          identify: true,
          title: "Valor Rural de la Tierra",
          service: "/valorruralservice",
          field: "par_idparcela",
          kml: false,
        },
        cuadricula_rural: {
          identify: true,
          title: "Carta de Valores Rurales",
          service: "/cuadricularural",
          field: "nombre_hoja",
          kml: false,
        },
        pedania: {
          identify: false,
          title: "Pedania",
        },
        departamentos: {
          identify: false,
          title: "Departamentos",
        },
        variables_rurales_grilla_consulta: {
          identify: true,
          title: "Consulta de variables",
          service: "/variablesruralesgrillaservice",
          field: "fid",
          kml: false,

          attributeDictionary: {
            "Porc. Sup. con recurrencia escasa": "Sup. con recurrencia escasa (%)",
            "Porc. Sup. con recurrencia leve": "Sup. con recurrencia leve (%)",
            "Porc. Sup. con recurrencia media": "Sup. con recurrencia media (%)",
            "Porc. Sup. con recurrencia alta": "Sup. con recurrencia alta (%)",
            "Porc. Sup. con recurrencia severa": "Sup. con recurrencia severa (%)",
          },
        },
      },
    },
    "Variables utilizadas en la estimación del Valor Unitario de la Tierra Urbana - Capital": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        datos_mercado: {
          identify: true,
          title: "Datos de Mercado",
          service: "/datosdemercadoservice",
          field: "fid",
          kml: false,
        },
        parcelas_valores: {
          identify: true,
          title: "Parcela (Enero 2019)",
          service: "/valorurbanoservice",
          field: "par_idparcela",
          kml: false,
        },
        cuadricula_atlas: {
          identify: true,
          title: "Carta de Valores Urbanos",
          service: "/cuadriculaurbana",
          field: "nombre_hoja",
          kml: false,
        },
        manzanas_variables_catastrales_consulta: {
          identify: true,
          title: "Variables por manzana",
          service: "/variablesentornoservice",
          field: "id",
          kml: false,
        },
        //Las capas que no se pueden consultar se definieron en la configuración del mapa en GeoNode
      },
    },
    "Variables utilizadas en la estimación del Valor Unitario de la Tierra Urbana - Interior": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        vut_completo: {
          identify: false,
          title: "Datos de Mercado",
        },
        datos_mercado: {
          identify: true,
          title: "Datos de Mercado",
          service: "/datosdemercadoservice",
          field: "fid",
          kml: false,
        },
        parcelas_valores: {
          identify: true,
          title: "Parcela (Enero 2019)",
          service: "/valorurbanoservice",
          field: "par_idparcela",
          kml: false,
        },
        cuadricula_atlas: {
          identify: true,
          title: "Carta de Valores Urbanos",
          service: "/cuadriculaurbana",
          field: "nombre_hoja",
          kml: false,
        },
        manzanas_variables_catastrales_consulta: {
          identify: true,
          title: "Variables por manzana",
          service: "/variablesentornoservice",
          field: "id",
          kml: false,
        },
        //Las capas que no se pueden consultar se definieron en la configuración del mapa en GeoNode
      },
    },
    /*
INMOBILIARIO CUMPLIDOR DE PRODUCCION
"Inmobiliario Cumplidor":
	{
             buscaService:
        {
            services:
            [
                "getubi",
				"getLocalidadesYParajes",
				"getinmcumpServ"
              
              ],
            
              solonumeros:true,
        mensajesbusca:
              {
                  view:"Texto a buscar",
                  embed:"Texto a buscar",
                  movil:"Texto a buscar",
              },
  
  
        mensajesbuscacartel: MsgPorDefecto
          },
               layers:{
                     "parcelas_deuda_inmobiliario":
                   {
                       identify:true,
                       title:"Parcela",
                       service:location.protocol+"//"+window.location.hostname+"/maps/featureservice",
                       field:"par_idparcela",
                       kml:true
   
                   },
                   "Pedanias":
                   {
                       identify:false,
                       title:"Pedania",
                   
                   },
                   "provincia":
                   {
                       identify:false,
                       title:"provincia",
                   
                   },
               "localidades":
                   {
                       identify:false,
                       title:"Localidades",
                   
                   },
               "radios_urbanos":
                   {
                       identify:false,
                       title:"radios_urbanos",
                   
                   },
               "departamentos":
                   {
                       identify:false,
                       title:"departamentos",
                   
                   }
               }
           },


    */
    "Inmobiliario Cumplidor": {
      buscaService: {
        services: [
          "getubi",
          "getLocalidadesYParajes",
          "getinmcumpServ",
          /* "getpornomycuenta" */
        ],

        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },



        mensajesbuscacartel: MsgPorDefecto,
      },
      dataOwner: {
        name: "Dirección General de Rentas",
        url: "https://www.rentascordoba.gob.ar/",
      },
      layers: {
        parcelas_deuda_inmobiliario: {
          identify: true,
          title: "Parcela",
          service: "/featureservice",
          field: "par_idparcela",
          kml: true,
        },
        Pedanias: {
          identify: false,
          title: "Pedania",
        },
        provincia: {
          identify: false,
          title: "provincia",
        },
        localidades: {
          identify: false,
          title: "Localidades",
        },
        radios_urbanos: {
          identify: false,
          title: "radios_urbanos",
        },
        departamentos: {
          identify: false,
          title: "departamentos",
        },
      },
    },
    "Catastro Online": {
      buscaService: {
        services: ["getubi", "getLocalidadesYParajes", "getParcelaDetailServ"],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      dataOwner: {
        name: "Dirección General de Catastro",
        url: "https://www.catastrocordoba.gob.ar/",
      },

      layers: {
        lineas_de_transporte_ferroviario_AN010: {
          identify: false,
          title: "Ferrocarril (IGN)",
        },
        red_vial_provincial: {
          identify: true,
          title: "Red Vial Provincial",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre",
            codigo: "Código",
            tipo: "Tipo",
            regional: "Regional",
            nombre_consorcio: "Nombre de consorcio",
            nro_consorcio: "Nro Consorcio",
            estado: "Estado",
            red: "Red",
          },
        },
        red_vial_nacional: {
          identify: true,
          title: "Red Vial Nacional",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre",
            tramo: "Tramo",
            tipo: "Tipo",
          },
        },
        lagunas_embalses_aprhi: {
          identify: false,
          title: "Lagunas y Embalses (APRHI)",
        },
        cursos_de_agua_aprhi: {
          identify: false,
          title: "Cursos de Agua (APRHI)",
        },
        secciones: {
          identify: true,
          title: "Secciones",
          kml: true,
          attributeDictionary: {
            nombre: "Sección",
          },
        },

        circunscripciones: {
          identify: true,
          title: "Circunscripciones",
          kml: true,
          attributeDictionary: {
            nomenclatura: "Nomenclatura",
            nombre: "Circunscripción",
          },
        },
        radios_urbanos: {
          identify: true,
          title: "Radio Municipal",
          kml: true,
          attributeDictionary: {
            key: "Nomenclatura radio municipal",
            nombre: "Nombre radio municipal",
            url: "Ley que le da origen",
            area_ha: "Area (Ha)",
            tipo_gobierno: "Tipo de gobierno",
          },
        },

        pedania: {
          identify: true,
          title: "Pedania",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre pedanía",
          },
        },
        departamentos: {
          identify: true,
          title: "Departamentos",
          kml: true,
          attributeDictionary: {
            codigo: "Código departamental",
            nombre: "Nombre departamento",
          },
        },
        provincia: {
          identify: false,
          title: "Provincia",
          kml: true,
        },
        manzana: {
          identify: false,
          title: "Manzana",
        },

        parcelas_graf: {
          identify: true,
          title: "Parcela",
          service: "/newdataserv",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
      },
    },
    "Mapa Esquemático 2022": {
      buscaService: {
        services: ["getubi", "getLocalidadesYParajes", "getpornomycuenta"],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },

      layers: {
        radios_urbanos: {
          identify: false,
        },
        no_cache_red_vial: {
          identify: false,
        },
        no_cache_tendencia_de_valor: {
          identify: false,
        },
        no_cache_sectores_particulares: {
          identify: true,
          title: "Sector Particular",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre",
            comentario: "Comentario",
            tipo: "Tipo",
            tipo_dominio: "Dominio",
          },
        },
        no_cache_maximo_valor: {
          identify: false,
        },
        no_cache_pico_valor: {
          identify: false,
        },
        no_cache_minimo_valor: {
          identify: false,
        },
        no_cache_depresion_valor: {
          identify: false,
        },
        no_cache_informacion_ambiental: {
          identify: true,
          title: "Información Ambiental",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre o denominación",
            comentario: "Detalle de uso",
            tipo: "Tipo",
            tipo_dominio: "Dominio",
          },
        },
        no_cache_red_vial: {
          identify: false,
        },
        no_cache_rios_cuerpos_de_agua: {
          identify: false,
        },
        no_cache_reservas: {
          identify: true,
          title: "Reserva Ambiental",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre o denominación",
            comentario: "Detalle de uso",
          },
        },
        manzana: {
          identify: false,
        },

        parcelas_graf: {
          identify: true,
          title: "Parcela - DGC",
          service: "/parcelascatastroservice",
          field: "par_idparcela",
          kml: true,
        },
      },
    },
    "Responsable Tributario": {
      buscaService: {
        services: ["getubi", "getLocalidadesYParajes", "getpornomycuenta"],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },

      layers: {
        parcelas_graf: {
          identify: true,
          title: "Parcela",
          service: "/responsableservice",
          field: "par_idparcela",
          kml: true,
        },
        pedania: {
          identify: false,
        },
        provincia: {
          identify: false,
        },
        manzana: {
          identify: false,
        },
        secciones: {
          identify: false,
        },
        radios_urbanos: {
          identify: false,
        },
        circunscripciones: {
          identify: false,
        },
        departamentos: {
          identify: false,
        },
      },
    },
    //FRAN
    "Mapa Base": {
      buscaService: {
        services: [
          "getubi",
          "getLocaPunto",
          "getCursoAgua",
          "getRedVialProvincial",
          "getRedVialNacional",
          "getRedTerciaria",
          "getpornomycuenta",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Nombre de Localidad<br> \
      - Nombre de Ruta<br> \
      - Cuenta de Rentas<br> \
      - Nomenclatura Castastro Provincial<br> \
      Presione Enter para buscar.",
      },
      dataOwner: {
        name: "IDECOR",
        url: "http://idecor.cba.gov.ar/",
      },
      layers: {
        red_vial_provincial: {
          identify: true,
          title: "Red Vial Provincial",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre",
            codigo: "Código",
            tipo: "Tipo",
            regional: "Regional",
            nombre_consorcio: "Nombre de consorcio",
            nro_consorcio: "Nro Consorcio",
            estado: "Estado",
            red: "Red",
          },
        },
        red_vial_nacional: {
          identify: true,
          title: "Red Vial Nacional",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre",
            tramo: "Tramo",
            tipo: "Tipo",
          },
        },
        pedania: {
          identify: true,
          title: "Pedania",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre pedanía",
          },
        },
        provincia: {
          identify: false,
          title: "Provincia",
          kml: true,
        },
        departamentos: {
          identify: true,
          title: "Departamentos",
          kml: true,
          attributeDictionary: {
            codigo: "Código departamental",
            nombre: "Nombre departamento",
          },
        },
        localidad_punto: {
          identify: false,
          title: "Localidades",
        },
        radios_urbanos: {
          identify: true,
          title: "Radio Municipal",
          kml: true,
          attributeDictionary: {
            key: "Nomenclatura Radio Urbano",
            nombre: "Nombre Radio Urbano",
            url: "Ley que le da origen",
            area_ha: "Area (Ha)",
            tipo_gobierno: "Tipo de gobierno",
          },
        },
        embalses_aprhi: {
          identify: true,
          title: "Lagunas y Embalses (APRHI)",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre",
            tipo: "Tipo",
            cuenca_km2: "Cuenca (km2)",
            nombrecom: "Nombre completo",
            proposito1: "Propósito 1",
            proposito2: "Propósito 2",
            proposito3: "Propósito 3",
          },
        },
        cursos_de_agua_aprhi: {
          identify: true,
          title: "Curso de Agua (APRHI)",
          kml: true,
          attributeDictionary: {
            ncompleto: "Nombre",
            tipo: "Tipo",
            orden: "Orden",
            departamen: "Departamento",
            cuenca: "Cuenca",
            subcuenca_: "Subcuenca",
          },
        },
        cursos_agua: {
          identify: true,
          title: "Curso de agua",
          kml: true,
        },
      },
    },

    "Cuarteles de Bomberos Voluntarios": {
      buscaService: {
        services: ["getubi", "getCuartel"],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
    - Dirección completa<br> \
    - Nombre de Cuartel<br><br> \
    Presione Enter para buscar.",
      },
      layers: {
        departamentos: {
          identify: false,
          title: "departamentos",
        },
        provincia: {
          identify: false,
          title: "provincia",
        },
        zonas_riesgo_cuarteles: {
          identify: false,
          title: "zonas_riesgo_cuarteles",
        },
        cuarteles_bbvv: {
          identify: true,
          title: "Cuartel",
          attributeDictionary: {
            número: "Número",
            codigo: "Código",
            nombre: "Nombre",
            departamento: "Departamento",
            telefono: "Teléfono",
          },
        },
        jurisdicciones_bbvv_1: {
          identify: true,
          title: "Jurisdicción",
          attributeDictionary: {
            cuartel: "Cuartel",
            tipo: "Tipo",
            codigo: "Código",
            superficie: "Superficie (km2)",
          },
        },
      },
    },
    "Precipitaciones Máximas Diarias Para Diseño Hidrológico": {
      buscaService: {
        services: ["getubi", "getLocaPunto", "getEmbalse", "getpornomycuenta"],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
    - Dirección completa<br> \
    - Nombre de Embalse<br> \
    - Nombre de Localidad<br> \
    - Cuenta de Rentas<br> \
    - Nomenclatura Catastral Provincial<br><br> \
    Presione Enter para buscar.",
      },
      layers: {
        localidad_punto: {
          identify: false,
          title: "localidad_punto",
        },
        departamentos: {
          identify: false,
          title: "departamentos",
        },
        provincia: {
          identify: false,
          title: "provincia",
        },
        cuerpos_de_agua_naturales: {
          identify: false,
          title: "cuerpos_de_agua_naturales",
        },
        ina_pmp_1: {
          identify: true,
          title: "PMP 1 día de duración",
          attributeDictionary: {
            GRAY_INDEX: "PMP [mm]",
          },
        },
        ina_pmp_24: {
          identify: true,
          title: "PMP 24 horas de duración",
          attributeDictionary: {
            GRAY_INDEX: "PMP [mm]",
          },
        },
        ina_pmd_2: {
          identify: true,
          title: "PMD Recurrencia 2 años",
          attributeDictionary: {
            PALETTE_INDEX: "PMD [mm]",
          },
        },
        ina_pmd_5: {
          identify: true,
          title: "PMD Recurrencia 5 años",
          attributeDictionary: {
            PALETTE_INDEX: "PMD [mm]",
          },
        },
        ina_pmd_10: {
          identify: true,
          title: "PMD Recurrencia 10 años",
          attributeDictionary: {
            PALETTE_INDEX: "PMD [mm]",
          },
        },
        ina_pmd_25: {
          identify: true,
          title: "PMD Recurrencia 25 años",
          attributeDictionary: {
            PALETTE_INDEX: "PMD [mm]",
          },
        },
        ina_pmd_50: {
          identify: true,
          title: "PMD Recurrencia 50 años",
          attributeDictionary: {
            PALETTE_INDEX: "PMD [mm]",
          },
        },
        ina_pmd_100: {
          identify: true,
          title: "PMD Recurrencia 100 años",
          attributeDictionary: {
            GRAY_INDEX: "PMD [mm]",
          },
        },
        parcelas_graf: {
          identify: true,
          title: "Parcela - DGC",
          service: "/parcelascatastroservice",
          field: "par_idparcela",
          kml: true,
        },
        embalses_aprhi: {
          identify: true,
          title: "Lagunas y Embalses (APRHI)",
          kml: true,
          attributeDictionary: {
            nombre: "Nombre",
            tipo: "Tipo",
            cuenca_km2: "Cuenca (km2)",
            nombrecom: "Nombre completo",
            proposito1: "Propósito 1",
            proposito2: "Propósito 2",
            proposito3: "Propósito 3",
          },
        },
        cursos_de_agua_aprhi: {
          identify: true,
          title: "Curso de Agua (APRHI)",
          kml: true,
          attributeDictionary: {
            ncompleto: "Nombre",
            tipo: "Tipo",
            orden: "Orden",
            departamen: "Departamento",
            cuenca: "Cuenca",
            subcuenca_: "Subcuenca",
          },
        },
        radios_urbanos: {
          identify: true,
          title: "Radio Municipal",
          kml: true,
          attributeDictionary: {
            key: "Nomenclatura Radio Urbano",
            nombre: "Nombre Radio Urbano",
            url: "Ley que le da origen",
            area_ha: "Area (Ha)",
            tipo_gobierno: "Tipo de gobierno",
          },
        },
      },
    },

    "Valor de la Tierra Urbana 2018": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        cuadricula_atlas: {
          identify: true,
          title: "Carta de Valores Urbanos",
          service: "/cuadriculaurbana",
          field: "nombre_hoja",
          kml: false,
        },
        parcelas_urbano_vut_graf: {
          identify: true,
          title: "Valor Urbano de la Tierra",
          service: "/valorurbanoservice",
          field: "par_idparcela",
          kml: false,
        },
        radios_urbanos: {
          identify: false,
          title: "Radio Municipal",
        },
        vut_completo: {
          identify: false,
          title: "urbano_vut_graf)",
        },
      },
    },
    "Valor de la Tierra Rural 2018": {
      buscaService: {
        services: servicesPorDefecto,

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: MsgPorDefecto,
      },
      layers: {
        cuadricula_rural: {
          identify: true,
          title: "Carta de Valores Rurales",
          service: "/cuadricularural",
          field: "nombre_hoja",
          kml: false,
        },
        departamentos: {
          identify: false,
          title: "departamentos",
        },
        provincia: {
          identify: false,
          title: "provincia",
        },
        pred_rural_final: {
          identify: false,
          title: "pred_rural_final)",
        },
        parcelas_rur_activas: {
          identify: true,
          title: "Valor Rural de la Tierra",
          service: "/valorruralservice",
          field: "par_idparcela",
          kml: false,
        },
      },
    },
    "Capacidad de Uso del Suelo": {
      layers: {
        cartas_500mil: {
          identify: true,
          title: "Drenaje (500 mil)",
        },
        carta_50000: {
          identify: true,
          title: "Capacidad de Uso (50mil)",
        },
        cus_500mil: {
          identify: true,
          title: "Capacidad de Uso (500mil)",
        },

        rio_cuarto_250mil: {
          identify: true,
          title: "Capacidad de Uso - Rio Cuarto (250mil)",
        },
        noroeste_100mil: {
          identify: true,
          title: "Capacidad de Uso - Nor Oeste (100mil)",
        },

        noreste_100mil: {
          identify: true,
          title: "Capacidad de Uso - Nor Este (100mil)",
        },

        indice_productividad: {
          identify: true,
          title: "Indice de Productividad (IP)",
          attributeDictionary: {
            ip: "Indice",
          },
        },

        departamentos: {
          identify: false,
          title: "Departamentos",
        },
        localidad_punto: {
          identify: false,
          title: "Localidades",
        },
        provincia: {
          identify: false,
          title: "provincia",
        },
      },
    },
    "Composición Química del Suelo": {
      layers: {
        muestra: {
          identify: true,
          title: "Muestra",
          attributeDictionary: {
            fid: "Identificador",
            orig: "Origen muestral",
            n: "Nitrógeno total (%)",
            p: "Fósforo (ppm)",
            mo: "Materia orgánica (%)",
            ph: "pH",
          },
        },
        potasio: {
          identify: true,
          title: "Potasio",
        },
        fosforo: {
          identify: true,
          title: "Fósforo",
        },
        morganica: {
          identify: true,
          title: "Materia Orgánica",
        },
        nitrogeno: {
          identify: true,
          title: "Nitrógeno",
        },
        ph: {
          identify: true,
          title: "pH",
        },
        departamentos: {
          identify: false,
          title: "Departamentos",
        },
        provincia: {
          identify: false,
          title: "provincia",
        },
      },
    },
    "Centros de Salud Públicos": {
      buscaService: {
        services: ["getubi", "getCentroSaludProv", "getCentroSaludMun", "getRadiosUrbanos", "getpornomycuenta"],
        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
          - Dirección completa<br> \
          - Nombre de Centro de Salud<br> \
          - Nombre de Localidad<br> \
          - Cuenta de Rentas<br> \
          - Nomenclatura Catastral Provincial<br><br> \
          Presione Enter para buscar."

      },
      dataOwner: {
        name: "Ministerio de Salud de la Provincia de Córdoba",
        url: "https://www.cba.gov.ar/reparticion/ministerio-de-salud/",
      },
      mapaBase: "OpenStreetMap",
      layers: {
        "efectores_nacional": {
          identify: true,
          title: "Centros de Salud Nacionales",
          kml: true,
          attributeDictionary: {
            "sisa": "Sisa",
            "nombre": "Nombre",
            "tipo": "Tipo",
            "categoria": "Categoría",
            "domicilio": "Domicilio",
            "localidad": "Localidad",
            "depto": "Departamento",
            "cp": "Código Postal",
            "mail_sirge": "Mail de contacto primario",
            "tel_sirge": "Telefono de contacto primario",
            "mail_sigip": "Mail de contacto secundario",
            "tel_sigips": "Telefono de contacto secundario",
            "financiamiento": "Financiamiento",
            "dependencia": "Dependencia",
            "tipologia": "Tipología",
            "codigo_remediar": "Código Remediar",
            "cuie": "Cuie",
            "dias_de_atencion": "Días de atención",
            "horario_de_atencion": "Horario de atención",
            "especialidades_disponibles": "Especialidades disponibles",
            "programan_turnos": "Programan turnos",
            "acceso_turno_programado": "Acceso a turno programado",
            "laboratorio": "Laboratorio",
            "medicamentos": "Medicamentos",
            "vacunatorio": "Vacunatorio",
            "referencia_mayor_complejidad": "Referencia de mayor complejidad"
          }
        },
        "efectores_publicos_provincial": {
          identify: true,
          title: "Centros de Salud Provinciales",
          kml: true,
          attributeDictionary: {
            "sisa": "Sisa",
            "nombre": "Nombre",
            "tipo": "Tipo",
            "categoria": "Categoría",
            "domicilio": "Domicilio",
            "localidad": "Localidad",
            "depto": "Departamento",
            "cp": "Código Postal",
            "mail_sirge": "Mail de contacto primario",
            "tel_sirge": "Telefono de contacto primario",
            "mail_sigip": "Mail de contacto secundario",
            "tel_sigips": "Telefono de contacto secundario",
            "financiamiento": "Financiamiento",
            "dependencia": "Dependencia",
            "tipologia": "Tipología",
            "codigo_remediar": "Código Remediar",
            "cuie": "Cuie",
            "dias_de_atencion": "Días de atención",
            "horario_de_atencion": "Horario de atención",
            "especialidades_disponibles": "Especialidades disponibles",
            "programan_turnos": "Programan turnos",
            "acceso_turno_programado": "Acceso a turno programado",
            "laboratorio": "Laboratorio",
            "medicamentos": "Medicamentos",
            "vacunatorio": "Vacunatorio",
            "referencia_mayor_complejidad": "Referencia de mayor complejidad"
          }
        },
        "efectores_publicos_municipales": {
          identify: true,
          title: "Centros de Salud Municipales",
          kml: true,
          attributeDictionary: {
            "sisa": "Sisa",
            "nombre": "Nombre",
            "tipo": "Tipo",
            "categoria": "Categoría",
            "domicilio": "Domicilio",
            "localidad": "Localidad",
            "depto": "Departamento",
            "cp": "Código Postal",
            "mail_sirge": "Mail de contacto primario",
            "tel_sirge": "Telefono de contacto primario",
            "mail_sigip": "Mail de contacto secundario",
            "tel_sigips": "Telefono de contacto secundario",
            "financiamiento": "Financiamiento",
            "dependencia": "Dependencia",
            "tipologia": "Tipología",
            "codigo_remediar": "Código Remediar",
            "cuie": "Cuie",
            "dias_de_atencion": "Días de atención",
            "horario_de_atencion": "Horario de atención",
            "especialidades_disponibles": "Especialidades disponibles",
            "programan_turnos": "Programan turnos",
            "acceso_turno_programado": "Acceso a turno programado",
            "laboratorio": "Laboratorio",
            "medicamentos": "Medicamentos",
            "vacunatorio": "Vacunatorio",
            "referencia_mayor_complejidad": "Referencia de mayor complejidad"
          }
        },
        "departamentos": {
          identify: false,
          title: "Departamentos"
        },
        "radios_urbanos": {
          identify: false,
        },
        "provincia": {
          identify: false,
          title: "Departamentos"
        }
      }
    },
    "Cobertura y Uso del Suelo - Periurbano de Córdoba 2019": {
      buscaService: {
        services: ["getubi", "getLocalidadesYParajes"],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },

        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
    - Dirección Completa<br> \
    Presione Enter para buscar.",
      },
      layers: {
        radios_urbanos_mcup: {
          identify: false,
          title: "Radio Municipal",
          kml: false,
        },
        parcelas_peri_cba: {
          identify: true,
          title: "Parcela periurbano capital",
          service: "/parcelascatastroservice",
          kml: true,
          field: "par_idparcela",
          attributeDictionary: {
            Nomenclatura: "Nomenclatura",
            Tipo_Parcela: "Tipo de Parcela",
            Estado: "Estado",
            Superficie_Tierra_Urbana: "Sup. tierra urbana",
            Superficie_Tierra_Rural: "Sup. tierra rural",
            Cantidad_Cuentas: "Sup. edificada",
            Superficie_Mejoras: "Cantidad_Cuentas",
          },
        },
        MCUP_CORDOBA: {
          identify: true,
          service: "/cobertura_peri",
          field: "GRAY_INDEX",
          kml: false,
          title: "Cobertura y Uso del Suelo - Periurbano de Córdoba 2019-02-19",
        },
      },
    },
    "Estimaciones Agrícolas 20-21": {
      buscaService: {
        services: ["getubi", "getLocalidadesYParajes", "getpornomycuenta"],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },
        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Cuenta de Rentas<br>  \
      - Nomenclatura Catastral Provincial<br> \
      Presione Enter para buscar.",
      },

      dataOwner: {
        name: "Ministerio de Agricultura y Ganadería",
        url: "https://agricultura.cba.gov.ar/",
      },

      layers: {
        radios_urbanos: {
          identify: false,
        },
        departamentos: {
          identify: false,
        },
        parcelas_graf: {
          identify: true,
          title: "Parcela DGC",
          service: "/parcelascatastroservice",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
        rendimiento_maiz: {
          identify: true,
          title: "Rendimiento maíz (qq/ha)",
          kml: false,
          attributeDictionary: {
            qq_maiz: "Maíz - qq/ha",
            porc_mz: "% Maíz",
            sup: "Superficie (ha)",
            sup_maíz: "Superficie sembrada maíz (ha)",
            nom_dpt: "Departamento",
            nom_pedania: "Pedanía",
            ip: "Índice de Productividad",
            cap: "Capacidad del suelo",
          },
        },
        rendimiento_soja: {
          identify: true,
          title: "Rendimiento soja (qq/ha)",
          kml: false,
          attributeDictionary: {
            qq_soja: "Soja - qq/ha",
            porc_sj: "% Soja",
            sup: "Superficie (ha)",
            sup_soja: "Superficie sembrada soja (ha)",
            nom_dpt: "Departamento",
            nom_pedania: "Pedanía",
            ip: "Índice de Productividad",
            cap: "Capacidad del suelo",
          },
        },
      },
    },
    "Urbanizaciones y Loteos en Trámite": {
      buscaService: {
        services: [
          "getubi",
          "getLocalidadesYParajes",
          "getpornomycuenta",
          "meulexpendientes",
        ],

        solonumeros: true,
        mensajesbusca: {
          view: "Texto a buscar",
          embed: "Texto a buscar",
          movil: "Texto a buscar",
        },
        mensajesbuscacartel: "En este mapa Ud. puede buscar por:<br> \
      - Dirección Completa<br> \
      - Localidad<br> \
      - Cuenta de Rentas<br> \
      - Nombre del Emprendimiento <br> \
      - Nombre del Desarrollista <br> \
      - Nomenclatura Catastro Provincial<br><br> \
      Presione Enter para buscar.",
      },
      dataOwner: {
        name: "Ministerio de Finanzas - MEUL",
        url: "https://escrituracionloteos.cba.gov.ar",
      },
      mapaBase: "OpenStreetMap",
      layers: {

        expedientes: {
          identify: true,
          title: "Expediente en MEUL",
          /* service: "/consultameul", */
          attributeDictionary: {
            nro_expediente: "Número de expediente",
            desarrollista: "Emprendimiento",
            ingreso: "Fecha de ingreso",
            etapa_vigente: "Etapa vigente",
            nro_cuenta_1: "Nro de cuenta",
            nro_cuenta_2: "Nro de cuenta 2",
            nro_cuenta_3: "Nro de cuenta 3",
            razon_social: "Desarrollista",
            cant_lotes: "Cantidad de lotes",
            mas_info: "Más información||Click aquí||https://escrituracionloteos.cba.gov.ar/#_etapas"

          },
          //service:location.protocol+"//"+window.location.hostname+"/maps/newdataserv",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "nro_expediente",
          kml: false,
        },
        manzana: {
          identify: false,
        },

        parcelas_graf: {
          identify: true,
          title: "Parcela",
          service: "/parcelascatastroservice",
          //service:location.protocol+"//"+window.location.hostname+"/maps/newdataserv",
          //service: "http://test01.mapascordoba.gob.ar/services/service_geonode.php",
          field: "par_idparcela",
          kml: true,
        },
        radios_urbanos: {
          identify: false,
        },
      },
    },
    "Cobertura de Suelo (Land Cover)": {
      layers: {
        provincia: {
          identify: false,
          title: "provincia",
        },
        localidad_punto: {
          identify: false,
          title: "Localidades",
        },
        departamentos: {
          identify: false,
          title: "Departamentos",
        },
        Land_Cover_N1: {
          identify: true,
          service: "/cobertura1",
          field: "Rango",
          kml: false,
          identify: true,
          title: "Land Cover Nivel 1",
        },
        Land_Cover_N2: {
          identify: true,
          service: "/cobertura2",
          field: "Rango",
          kml: false,
          identify: true,
          title: "Land Cover Nivel 2",
        },
      },
    },
  };
  if (mapName==="")
  {
    return MapLayerConfig;
  }
  else
  {
  return MapLayerConfig[mapName];
  }
}

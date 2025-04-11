import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#ffffff',
        color: '#555',
        padding: 30,
        fontFamily: 'Times-Roman',
    },

    header: {
        textAlign: 'center',
    },

    header__name: {
        color: '#111',
        fontSize: 20,
        fontFamily: 'Times-Bold',
        textAlign: 'center',
    },
    header__links: {
        color: '#555',
        fontSize: 11,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 14,
        marginTop: 6,
        marginBottom: 4,
    },

    title_wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 12,
    },

    subTitle_wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 11,
    },

    title: {
        fontFamily: 'Times-Bold',
        marginRight: 'auto',
        color: '#555',
    },
    date: {
        fontFamily: 'Times-Italic',
        fontSize: 10,
    },

    line: {
        borderBottom: '1px solid #eee',
        margin: '5px 0px',
    },
    lists: {
        fontSize: 10.2,
        marginTop: 2,
    },
    link: {
        color: '#666',
    },
    listItem: {
        fontSize: 10,
        marginBottom: 4,
        lineHeight: 1.3,
      },
      link: {
        fontSize: 10,
        color: '#555',
        marginRight: 10,
        textDecoration: 'none',
      },
      languages_wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }
      
});

export default styles;

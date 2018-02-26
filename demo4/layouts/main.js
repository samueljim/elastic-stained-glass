import Meta from '../components/meta';
import Footer from '../components/footer';
// import React                from 'react';
// import Head                 from 'next/head';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';


// // if (typeof window !== 'undefined') injectTapEventPlugin();
try { injectTapEventPlugin(); } catch (e) { }

let overwrites = {
    "palette": {
        "primary1Color": "#e64a19",
        "primary2Color": "#dd2c00",
        "accent1Color": "#ffb300",
        "accent2Color": "#ff6d00",
        "accent3Color": "#e64a19"
    }
};

const muiTheme = getMuiTheme(baseTheme, overwrites);

//     palette: {
//         "primary1Color": "#e64a19",
//         "primary2Color": "#dd2c00",
//         "accent1Color": "#ffb300",
//         "accent2Color": "#ff6d00",
//         "accent3Color": "#e64a19"
//     },
//     userAgent: false
// });

export default ({ children }) => (
    <div>
        <Meta />
        <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <AppBar title="Page Title" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {children}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </MuiThemeProvider>
    </div>
)

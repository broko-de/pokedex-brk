const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js'],
    },
    module:{
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.png/, // expresion regular para incluir archivos con extension .png
                type: 'asset/resource' //
            },
            //regla para incluir las fuentas
            {
                test: /\.(woff|woff2)$/, //indicamos extensiones de las fuentes
                use:{
                    loader: 'url-loader', //cargamos el loader de las fuentes
                    options: { //agregamos opciones de configuracion
                        limit: 10000,  // Tamaño del recurso
                        mimetype: "application/font-woof", //Especificamos el tipo de archivo
                        name: "[name].[contenthash].[ext]", //para que respete el nombre del archivo y la extensión. Podriamos cambiarla si quisieramos 
                        outputPath: "./assets/fonts/", //indicamos a donde vamos a guardar los archivos en el directorio dist
                        publicPath: "../assets/fonts/", //especificamos el directorio publico sin compilaciones
                        esModule: false //avisamos explicitamente si es o no un modulo, en este caso NO.
                    }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                inject:true,
                template: './public/index.html',
                filename: './index.html',
            }
        ),
        new CopyWebpackPlugin({
                patterns: [
                    {
                        from: './src/styles/styles.css',
                        to: ''
                    },
                    {
                        from: path.resolve(__dirname,"src","assets/images"), //indicamos desde vamos obtener los archivos a copiar
                        //path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'); en el caso de quere incluir un archivo en particular
                        to: "assets/images", //indicamos donde le vamos a mover los archivos en la carpeta dist
                    }
                ]
            }
        )
    ]
}
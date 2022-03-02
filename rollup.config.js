import babel from 'rollup-plugin-babel';
// import {resolve} from "@babel/core/lib/vendor/import-meta-resolve";
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss'
export default [
    {
        input: './src/index.js',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs'
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports: "named",
            }
        ],
        plugins: [
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react']
            }),
            external(),
            // resolve(),
            postcss({
                plugins: [],
                minimize: true
            })
        ]
    }
]
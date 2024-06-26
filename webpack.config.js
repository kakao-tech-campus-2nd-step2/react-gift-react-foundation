import { resolve as _resolve, join } from 'path';

export const entry = './src/index.tsx';
export const output = {
	filename: 'bundle.js',
	path: _resolve(__dirname, 'dist'),
};
export const resolve = {
	extensions: ['.js', '.jsx', '.ts', '.tsx'],
	alias: {
		styles: _resolve(__dirname, 'src/styles/'),
		components: _resolve(__dirname, 'src/components/'),
	},
};
export const module = {
	rules: [
		{
			test: /\.(ts|tsx)$/,
			use: 'ts-loader',
			exclude: /node_modules/,
		},
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader'],
		},
	],
};
export const devServer = {
	contentBase: join(__dirname, 'dist'),
	compress: true,
	port: 9000,
};

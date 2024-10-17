import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import App1 from "./App1";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<App1 />} />
				<Route path="/index.html" element={<App1 />} />
				{/* ↑デフォルトアプリ */}
				<Route path="/3" element={<App1 />} />
			</Routes>
		</>
	);
}

export const Template1: React.FC<
	React.PropsWithChildren<{
		title: string;
	}>
> = ({ title, children }) => {
	return (
		<div className="p-3">
			<article className="mb-5 leading-relaxed">
				<h1 className="text-3xl font-bold mt-3 mb-5">{title}</h1>
				{children}
			</article>
			<nav className="mt-5">
				<Links />
			</nav>
		</div>
	);
};

export const Aa = ({ txt }: { txt: string }) => {
	return (
		<a
			href={`https://github.com/ianstormtaylor/slate/blob/main/site/examples/ts/${txt}`}
			className="a1"
			target="_blank"
			rel="noopener noreferrer"
		>
			slate/site/examples/ts/{txt}
		</a>
	);
};

export function Links() {
	return (
		<ol reversed className="list-decimal list-inside">
			<li>
				<Link className="a1" to="/1">
					最初のテスト
				</Link>
			</li>
		</ol>
	);
}

export default App;

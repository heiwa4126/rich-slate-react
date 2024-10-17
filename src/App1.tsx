import { useMemo } from "react";
import { type Descendant, createEditor } from "slate";
import { withHistory } from "slate-history";
import { Editable, Slate, withReact } from "slate-react";
import { Aa, Template1 } from "./App";

export function App() {
	const editor = useMemo(() => withHistory(withReact(createEditor())), []);
	return (
		<Template1 title="1. 最初のテスト">
			<div className="p-1 border-2">
				<Slate editor={editor} initialValue={initialValue}>
					<Editable placeholder="Enter some plain text..." />
				</Slate>
			</div>
			<p className="mt-5">
				参考: <Aa txt="plaintext.tsx" />
			</p>
		</Template1>
	);
}

const initialValue: Descendant[] = [
	{
		// type: "paragraph",
		children: [{ text: "This is editable plain text, just like a <textarea>!" }],
	},
];

export default App;

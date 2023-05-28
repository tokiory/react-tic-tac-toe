import {createRoot} from "react-dom/client";
import {App} from "./App.tsx";
import '@fontsource-variable/inter';
import 'normalize.css';
import './styles.scss';

const root = createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
<App />
)
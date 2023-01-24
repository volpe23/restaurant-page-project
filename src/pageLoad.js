import { createFront } from './frontPage'

export default function loadPage() {
    const contentDiv = document.getElementById('content');
    const pageContent = createFront();
    contentDiv.append(pageContent);
}
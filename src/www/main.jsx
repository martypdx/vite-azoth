import { fetchEmojis } from './r-and-d/fetchEmojis.js';
import { multiplex } from '../promises/multiplex.js';
import './style.css';

function InnerHtml({ html, className = '' }) {
    const rawEmoji = <span className={className ?? ''}></span>;
    rawEmoji.firstChild.innerHTML = html;
    return rawEmoji;
}

const [Count, List] = multiplex(
    fetchEmojis(), 
    ({ length }) => EmojiCount({ count: length }), 
    emojis => EmojiList({ emojis }),
);

function EmojiList({ emojis }) {
    return <ul>
        {emojis.map(Emoji)}
    </ul>;
}

function Emoji({ name, unicode, htmlCode }) {   
    return <li>
        {InnerHtml({ html: htmlCode.join('') })} 
        {name}
        {unicode} 
    </li>;
}

function EmojiCount({ count }) {
    return <span>{count}</span>;
}

const App = <div>
    <header>
        <h1>{Count} emojis for all my friends</h1>
    </header>
        
    <main>
        <h2>Amazing Emoji List</h2>
        {List}
    </main>
</div>;

document.body.append(App);

const socials = [
  {
    name: 'github',
    link: 'https://github.com/ausathdzil',
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/ausathdzil/',
  },
  {
    name: 'twitter',
    link: 'https://www.twitter.com/ausathdzil/',
  },
];

function App() {
  return (
    <main>
      <article>
        <h1>ausath ikram</h1>
        <p>
          hi 👋 my name is ausath abdi dzil ikram. i&apos;m an undergraduate
          computer science student majoring in information systems.
        </p>
      </article>
      <ul>
        {socials.map((social, index) => (
          <li key={index}>
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.name}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;

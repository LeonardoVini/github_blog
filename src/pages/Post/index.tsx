import { Link } from 'react-router-dom'

import {
  FaCalendar,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'

import { PostContainer, TitleContent, ArticleContent } from './styles'

export function Post() {
  return (
    <PostContainer>
      <TitleContent>
        <nav>
          <Link to="/">
            <FaChevronLeft size={12} />
            <span>VOLTAR</span>
          </Link>

          <Link to="/">
            <FaExternalLinkAlt size={12} />
            <span>VER NO GITHUB</span>
          </Link>
        </nav>

        <h1>JavaScript data types and data structures</h1>

        <ul>
          <li>
            <FaGithub size={18} />
            <span>cameronwll</span>
          </li>

          <li>
            <FaCalendar size={18} />
            <span>Há 1 dia</span>
          </li>

          <li>
            <FaComment size={18} />
            <span>5 comentários</span>
          </li>
        </ul>
      </TitleContent>

      <ArticleContent>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>

        <Link to="/">Dynamic typing</Link>

        <p>
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </p>
      </ArticleContent>
    </PostContainer>
  )
}

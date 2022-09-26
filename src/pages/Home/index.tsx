import { useCallback, useEffect, useState } from 'react'

import {
  HomeContainer,
  AvatarContent,
  AvatarContainer,
  FormContainer,
  Post,
  PostListContainer,
} from './styles'

import {
  FaExternalLinkAlt,
  FaGithub,
  FaBuilding,
  FaUserFriends,
} from 'react-icons/fa'

import { api } from '../../lib/axios'

interface User {
  name: string
  login: string
  avatar_url: string
  bio: string
  company: string
  followers: number
  html_url: string
}

export function Home() {
  const [user, setUser] = useState({} as User)

  const fetchUser = useCallback(async () => {
    const { data: user } = await api.get<User>('/users/LeonardoVini')

    setUser(user)
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <HomeContainer>
      <AvatarContainer>
        <img src={user.avatar_url} alt={user.name} />

        <AvatarContent>
          <header>
            <h1>{user.name}</h1>

            <a href={user.html_url} target="__blank">
              GITHUB
              <FaExternalLinkAlt size={12} />
            </a>
          </header>

          <p>{user.bio}</p>

          <ul>
            <li>
              <FaGithub size={18} />
              <span>{user.login}</span>
            </li>

            <li>
              <FaBuilding size={18} />
              <span>{user.company}</span>
            </li>

            <li>
              <FaUserFriends size={18} />
              <span>{user.followers} seguidores</span>
            </li>
          </ul>
        </AvatarContent>
      </AvatarContainer>

      <FormContainer>
        <header>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </header>

        <input type="text" placeholder="Buscar conteúdo" />
      </FormContainer>

      <PostListContainer>
        <Post>
          <header>
            <h1>JavaScript data types and data structures</h1>
            <span>Há 1 dia</span>
          </header>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in{' '}
          </p>
        </Post>

        <Post>
          <header>
            <h1>JavaScript data types and data structures</h1>
            <span>Há 1 dia</span>
          </header>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in{' '}
          </p>
        </Post>

        <Post>
          <header>
            <h1>JavaScript data types and data structures</h1>
            <span>Há 1 dia</span>
          </header>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in{' '}
          </p>
        </Post>

        <Post>
          <header>
            <h1>JavaScript data types and data structures</h1>
            <span>Há 1 dia</span>
          </header>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in{' '}
          </p>
        </Post>

        <Post>
          <header>
            <h1>JavaScript data types and data structures</h1>
            <span>Há 1 dia</span>
          </header>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in{' '}
          </p>
        </Post>

        <Post>
          <header>
            <h1>JavaScript data types and data structures</h1>
            <span>Há 1 dia</span>
          </header>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in{' '}
          </p>
        </Post>
      </PostListContainer>
    </HomeContainer>
  )
}

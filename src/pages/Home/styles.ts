import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: -5.125rem;
`

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors['base-profile']};

  padding: 2rem 2.5rem;

  gap: 2rem;

  border-radius: 10px;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const AvatarContent = styled.section`
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: ${({ theme }) => theme.colors['base-title']};
      font-size: 1.5rem;
      font-weight: 700;
    }

    a {
      display: flex;
      align-items: center;

      gap: 0.5rem;

      color: ${({ theme }) => theme.colors.blue};
      font-size: 0.75rem;
      font-weight: 700;
    }
  }

  p {
    margin-top: 0.5rem;
  }

  ul {
    display: flex;
    align-items: center;

    list-style: none;

    gap: 1.5rem;

    margin-top: 1.5rem;

    li {
      display: flex;
      align-items: center;

      gap: 0.5rem;

      svg {
        color: ${({ theme }) => theme.colors['base-label']};
      }

      span {
        color: ${({ theme }) => theme.colors['base-subtitle']};
      }
    }
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 4.5rem;

  gap: 0.75rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: ${({ theme }) => theme.colors['base-subtitle']};
      font-size: 1.125rem;
      font-weight: 700;
    }

    span {
      color: ${({ theme }) => theme.colors['base-span']};
      font-size: 0.875rem;
    }
  }

  input {
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors['base-border']};
    background: ${({ theme }) => theme.colors['base-input']};

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }

    &:focus {
      transition: border 0.2s;
      border: 1px solid ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
`

export const PostListContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`

export const Post = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors['base-post']};

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h1 {
      width: 100%;
      max-width: 17.5rem;
      color: ${({ theme }) => theme.colors['base-title']};
      font-size: 1.25rem;
      font-weight: 700;
    }

    span {
      color: ${({ theme }) => theme.colors['base-span']};
      font-size: 0.875rem;
    }
  }
`

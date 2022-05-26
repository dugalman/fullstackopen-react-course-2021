import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'

const blog = {
  id: 123,
  title: 'BLOG DE PRUEBA',
  author: 'AUTOR DE PRUEBA',
  likes: 666,
  url: 'https://www.google.com/',

}

test('renders content', () => {

  const mockDelete = jest.fn()
  const mockAddLike = jest.fn()

  const component = render(
    <Blog
      key={blog.id}
      blog={blog}
      handleAddLike={mockAddLike}
      handleDeletePost={mockDelete}
    />
  )

  component.debug()

  expect(component.container).toHaveTextContent('BLOG DE PRUEBA')
  expect(component.container).toHaveTextContent('AUTOR DE PRUEBA')

  expect(component.container.querySelector('H2')).toHaveTextContent('BLOG DE PRUEBA')
  expect(component.container.querySelector('H3')).toHaveTextContent('AUTOR DE PRUEBA')
  expect(component.container.querySelector('button')).toHaveTextContent('view')

  const deleteButton = component.queryByText('DELETE')
  expect(deleteButton).toBeNull() // it doesn't exist

  const divUrl = component.container.querySelector('.url')
  expect(divUrl).toBeNull() // it doesn't exist

  const divLikes = component.container.querySelector('.likes')
  expect(divLikes).toBeNull() // it doesn't exist


})
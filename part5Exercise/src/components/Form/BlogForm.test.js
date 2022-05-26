import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import BlogForm from './BlogForm'

const newBlog = {
  title: 'SOY UN TITULO NUEVO',
  url: 'https://fullstackopen.com/es/',
  author: 'Damian Mac Dougall'
}


test('renders content', () => {

  const mockCreateBlog = jest.fn()

  const component = render(
    <BlogForm createBlog={mockCreateBlog} />
  )

  const inputTitle = component.container.querySelector('#new-blog-title')
  expect(inputTitle).toBeDefined()

  const inputAuthor = component.container.querySelector('#new-blog-author')
  expect(inputAuthor).toBeDefined()

  const inputUrl = component.container.querySelector('#new-blog-url')
  expect(inputUrl).toBeDefined()

  const form = component.container.querySelector('form')
  expect(form).toBeDefined()

  fireEvent.change(inputTitle, { target: { value: newBlog.title } })
  fireEvent.change(inputUrl, { target: { value: newBlog.url } })
  fireEvent.change(inputAuthor, { target: { value: newBlog.author } })

  // component.debug()
  fireEvent.submit(form)

  // console.log(mockCreateBlog.mock.calls[0][0])
  // console.log(mockCreateBlog.mock.calls[0][0])
  // console.log(mockCreateBlog.mock.calls[0][1])
  // console.log(mockCreateBlog.mock.calls[0][2])

  expect(mockCreateBlog.mock.calls).toHaveLength(1) //revisa que se llame una ves al metodo
  expect(mockCreateBlog.mock.calls[0][0]).toBe(newBlog.title)
  expect(mockCreateBlog.mock.calls[0][1]).toBe(newBlog.author)
  expect(mockCreateBlog.mock.calls[0][2]).toBe(newBlog.url)


})
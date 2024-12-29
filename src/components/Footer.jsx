import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-4">
          <div className="container mx-auto text-center">
            <p>© {new Date().getFullYear()} Color Palette </p>
            <p>Developed by Nikhil Gaur</p>
          </div>
        </footer>
    )
}

export  {Footer}
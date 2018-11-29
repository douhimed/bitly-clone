import React from 'react'
import logo from '../../static/logo.svg'
import { ButtonIcon } from '../buttons'
import { Link } from '@reach/router'
import './navigation.css'

const Navigation = (props) => {
  const { links, onClick } = props
  const childLinks = links.map(link => (
    <Link className="navigation__link"
          key={link.url}
          to={link.url}>
    {link.label}</Link>   
  ))
  return (
    <div className="navigation__container">
      <div className="navigation__inner">
        <ButtonIcon to="" alt="bitly clone" icon={logo} onClick={onClick} />
        <div className="spacer" />
        {childLinks}
      </div>
    </div>
  )
}

export default Navigation
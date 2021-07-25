import React, { Component } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'
import hospital_navigation from './hospital_nav'
import vendor_navigation from './vendor_nav'
import cookie from 'react-cookies';
import img from '../assets/logo.jpeg'

class TheSidebar extends Component {

  state = {
    USERROLE: "",
    isadmincontent: false,
    ishospitalcontent: false,
    isvendorcontent: false,
  }
  componentDidMount() {
    const userrole = cookie.load('USERROLE')

    console.log("dash status is :", userrole)

    if (userrole === "ADMIN") {
      this.setState({
        isadmincontect: true,
        ishospitalcontent: false,
        isvendorcontent: false,
        USERROLE: userrole
      })
    } else if (userrole === "HOSPITAL") {
      this.setState({
        isadmincontect: false,
        ishospitalcontent: true,
        isvendorcontent: false,
        USERROLE: userrole
      })

    } else if (userrole === "VENDOR") {
      this.setState({
        isadmincontect: false,
        ishospitalcontent: false,
        isvendorcontent: true,
        USERROLE: userrole
      })
    }
  }
  details = () => {
    // const dispatch = useDispatch()
    // const show = useSelector(state => state.sidebarShow)
  }

  render() {
    return (
      <CSidebar
      // show={this.details.show}
      // onShowChange={(val) => this.details.dispatch({ type: 'set', sidebarShow: val })}
      >
        <CSidebarBrand className="d-md-down-none" to="/">
          {/* <img src={img} style={{ width: '100%',objectFit: 'contain' }} alt={"."} /> */}
          {/* <h1>Easy Donations</h1> */}
        </CSidebarBrand>
        <CSidebarNav>
          {
            this.state.USERROLE === "ADMIN" ?
              <CCreateElement
                items={navigation}
                components={{
                  CSidebarNavDivider,
                  CSidebarNavDropdown,
                  CSidebarNavItem,
                  CSidebarNavTitle
                }}
              />
              : null
          }
          {
            this.state.USERROLE === "HOSPITAL" ?
              <CCreateElement
                items={hospital_navigation}
                components={{
                  CSidebarNavDivider,
                  CSidebarNavDropdown,
                  CSidebarNavItem,
                  CSidebarNavTitle
                }}
              />
              : null
          }
          {
            this.state.USERROLE === "VENDOR" ?
              <CCreateElement
                items={vendor_navigation}
                components={{
                  CSidebarNavDivider,
                  CSidebarNavDropdown,
                  CSidebarNavItem,
                  CSidebarNavTitle
                }}
              />
              : null
          }
        </CSidebarNav>
        <CSidebarMinimizer className="c-d-md-down-none" />
      </CSidebar>
    )
  }
}

export default React.memo(TheSidebar)

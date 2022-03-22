// ** Custom Hooks
import { useRTL } from '@hooks/useRTL'

// ** Third Party Components
import wNumb from 'wnumb'
import classnames from 'classnames'
import { Star } from 'react-feather'
import Nouislider from 'nouislider-react'
import { Card, CardBody, Row, Col, CustomInput, Button } from 'reactstrap'

// ** Styles
import '@styles/react/libs/noui-slider/noui-slider.scss'

const Sidebar = props => {
  // ** Props
  const { sidebarOpen } = props

  // ** Hooks
  const [isRtl, setIsRtl] = useRTL()

  // ** Array of categories
  const categories = [
    {
      id: 'starters',
      title: 'Strarters',
      defaultChecked: true
    },
    {
      id: 'maincourse',
      title: 'Main Course'
    },
    {
      id: 'biryani',
      title: 'Rice and Biryani'
    },
    {
      id: 'chinese',
      title: 'Chinese'
    },
    {
      id: 'icecreams',
      title: 'Ice Creams'
    },
    {
      id: 'pizza',
      title: 'Pizza'
    },
    {
      id: 'cakes',
      title: 'Cakes'
    }
    /*{
      id: 'office-school',
      title: 'Office & School Supplies'
    },
    {
      id: 'tv-home-theater',
      title: 'TV & Home Theater'
    },
    {
      id: 'video-games',
      title: 'Video Games'
    }*/
  ]

  // ** Array of brands
  const brands = [
    {
      title: 'LB Nagar',
      total: 110
    },
    {
      title: 'Kothapet',
      total: 211,
      checked: true
    },
    {
      title: 'Banjara Hills',
      total: 686
    },
    {
      title: 'Begumpet',
      total: 201
    },
    {
      title: 'Ameerpet',
      total: 322,
      checked: true
    },
    {
      title: 'Kompally',
      total: 264
    },
    {
      title: 'Kondapur',
      total: 345
    },
    {
      title: 'Kukatpally',
      total: 520
    },
    {
      title: 'Secunderabad',
      total: 420
    },
    {
      title: 'Gachibowli',
      total: 216
    }
  ]

  // ** Array of ratings
  const ratings = [
    {
      ratings: 4,
      total: 160
    },
    {
      ratings: 3,
      total: 176
    },
    {
      ratings: 2,
      total: 291
    },
    {
      ratings: 1,
      total: 190
    }
  ]

  return (
    <div className='sidebar-detached sidebar-left'>
      <div className='sidebar'>
        <div
          className={classnames('sidebar-shop', {
            show: sidebarOpen
          })}
        >
          <Row>
            <Col sm='12'>
              <h6 className='filter-heading d-none d-lg-block'>Filters</h6>
            </Col>
          </Row>
          <Card>
            <CardBody>
              <div className='brands'>
                <h6 className='filter-title'>Popular localities</h6>
                <ul className='list-unstyled brand-list'>
                  {brands.map(brand => {
                    return (
                      <li key={brand.title}>
                        <CustomInput
                          type='checkbox'
                          id={brand.title}
                          label={brand.title}
                          defaultChecked={brand.checked}
                        />
                        <span>{brand.total}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
              
              <div id='clear-filters'>
                <Button.Ripple color='primary' block>
                  Clear All Filters
                </Button.Ripple>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

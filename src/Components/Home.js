import React from 'react'
import Sidebar from './Sidebar'

const Home = () => {
  return (
    <div>
      <Sidebar />
      <div className="page-wrapper">
        <div className="page-content">
          <div className="card radius-10">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 row-group g-0">
              <div className="col">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0">9526</h5>
                    <div className="ms-auto">
                      <i className="bx bx-cart fs-3 text-white" />
                    </div>
                  </div>
                  <div className="progress my-3" style={{ height: 4 }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '55%' }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="d-flex align-items-center text-white">
                    <p className="mb-0">Total Orders</p>
                    <p className="mb-0 ms-auto">
                      +4.2%
                      <span>
                        <i className="bx bx-up-arrow-alt" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0">$8323</h5>
                    <div className="ms-auto">
                      <i className="bx bx-dollar fs-3 text-white" />
                    </div>
                  </div>
                  <div className="progress my-3" style={{ height: 4 }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '55%' }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="d-flex align-items-center text-white">
                    <p className="mb-0">Total Revenue</p>
                    <p className="mb-0 ms-auto">
                      +1.2%
                      <span>
                        <i className="bx bx-up-arrow-alt" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0">6200</h5>
                    <div className="ms-auto">
                      <i className="bx bx-group fs-3 text-white" />
                    </div>
                  </div>
                  <div className="progress my-3" style={{ height: 4 }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '55%' }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="d-flex align-items-center text-white">
                    <p className="mb-0">Visitors</p>
                    <p className="mb-0 ms-auto">
                      +5.2%
                      <span>
                        <i className="bx bx-up-arrow-alt" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0">5630</h5>
                    <div className="ms-auto">
                      <i className="bx bx-envelope fs-3 text-white" />
                    </div>
                  </div>
                  <div className="progress my-3" style={{ height: 4 }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '55%' }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="d-flex align-items-center text-white">
                    <p className="mb-0">Messages</p>
                    <p className="mb-0 ms-auto">
                      +2.2%
                      <span>
                        <i className="bx bx-up-arrow-alt" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*end row*/}
          </div>
          <div className="row">
            <div className="col-12 col-lg-8 col-xl-8 d-flex">
              <div className="card radius-10 w-100">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div>
                      <h5 className="mb-0">Site Traffic</h5>
                    </div>
                    <div className="dropdown options ms-auto">
                      <div
                        className="dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown"
                      >
                        <i className="bx bx-dots-horizontal-rounded" />
                      </div>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex align-items-center ms-auto font-13 gap-2 my-3">
                    <span className="border px-1 rounded cursor-pointer">
                      <i className="bx bxs-circle me-1 text-white" />
                      New Visitor
                    </span>
                    <span className="border px-1 rounded cursor-pointer">
                      <i className="bx bxs-circle me-1 text-light-1" />
                      Old Visitor
                    </span>
                  </div>
                  <div className="chart-container-1">
                    <canvas id="chart1" />
                  </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 row-cols-xl-3 g-0 row-group text-center border-top">
                  <div className="col">
                    <div className="p-3">
                      <h5 className="mb-0">45.87M</h5>
                      <small className="mb-0">
                        Overall Visitor{' '}
                        <span>
                          {' '}
                          <i className="bx bx-up-arrow-alt align-middle" /> 2.43%
                        </span>
                      </small>
                    </div>
                  </div>
                  <div className="col">
                    <div className="p-3">
                      <h5 className="mb-0">15:48</h5>
                      <small className="mb-0">
                        Visitor Duration{' '}
                        <span>
                          {' '}
                          <i className="bx bx-up-arrow-alt align-middle" /> 12.65%
                        </span>
                      </small>
                    </div>
                  </div>
                  <div className="col">
                    <div className="p-3">
                      <h5 className="mb-0">245.65</h5>
                      <small className="mb-0">
                        Pages/Visit{' '}
                        <span>
                          {' '}
                          <i className="bx bx-up-arrow-alt align-middle" /> 5.62%
                        </span>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-xl-4 d-flex">
              <div className="card radius-10 overflow-hidden w-100">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2">
                    <div>
                      <h5 className="mb-0">Weekly sales</h5>
                    </div>
                    <div className="dropdown options ms-auto">
                      <div
                        className="dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown"
                      >
                        <i className="bx bx-dots-horizontal-rounded" />
                      </div>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="chart-js-container2">
                    <div className="piechart-legend">
                      <h3 className="mb-1">95K</h3>
                      <h6 className="mb-0">Total sales</h6>
                    </div>
                    <canvas id="chart2" />
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table align-items-center mb-0">
                    <tbody>
                      <tr className="border-top">
                        <td>
                          <i className="bx bxs-circle text-white me-2" /> Direct
                        </td>
                        <td>$5856</td>
                        <td>+55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="bx bxs-circle text-light-2 me-2" />
                          Affiliate
                        </td>
                        <td>$2602</td>
                        <td>+25%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="bx bxs-circle text-light-3 me-2" />
                          E-mail
                        </td>
                        <td>$1802</td>
                        <td>+15%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/*End Row*/}
          <div className="row row-cols-1 row-cols-lg-3">
            <div className="col">
              <div className="card radius-10">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="w_chart easy-dash-chart1" data-percent={60}>
                      <span className="w_percent" />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-0">Facebook Followers</h6>
                      <small className="mb-0">
                        22.14% <i className="bx bxs-up-arrow align-middle me-1" />
                        Since Last Week
                      </small>
                    </div>
                    <div className="ms-auto fs-1 text-white">
                      <i className="bx bxl-facebook" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card radius-10">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="w_chart easy-dash-chart2" data-percent={65}>
                      <span className="w_percent" />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-0">Twitter Tweets</h6>
                      <small className="mb-0">
                        32.15% <i className="bx bxs-up-arrow align-middle me-1" />
                        Since Last Week
                      </small>
                    </div>
                    <div className="ms-auto fs-1 text-white">
                      <i className="bx bxl-twitter" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card radius-10">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="w_chart easy-dash-chart3" data-percent={75}>
                      <span className="w_percent" />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-0">Youtube Subscribers</h6>
                      <small className="mb-0">
                        58.24% <i className="bx bxs-up-arrow align-middle me-1" />
                        Since Last Week
                      </small>
                    </div>
                    <div className="ms-auto fs-1 text-white">
                      <i className="bx bxl-youtube" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End Row*/}

          {/*End Row*/}

          {/*End Row*/}

        </div>
      </div>
    </div>
  )
}

export default Home
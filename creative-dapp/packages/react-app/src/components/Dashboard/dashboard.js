import React from 'react';
import { Link } from 'react-router-dom';
import Spark1 from '../common/apexChart/spark1'
import Spark2 from '../common/apexChart/spark2';
import Spark3 from '../common/apexChart/spark3';
import Spark7 from '../common/apexChart/spark7';
import Stacked from '../common/apexChart/stacked';
import BTC from '../../assets/images/coin/BTC.svg';
import ETH from '../../assets/images/coin/ETH.svg';
import DASH from '../../assets/images/coin/DASH.svg';
import BTG from '../../assets/images/coin/BTG.svg';
import LTC from '../../assets/images/coin/LTC.svg';
import stellar from '../../assets/images/coin/stellar.svg';
import logo from '../../assets/images/creative-icon-header.png';
import avatar1 from '../../assets/images/xs/avatar1.jpg';
import avatar2 from '../../assets/images/xs/avatar2.jpg';
import avatar3 from '../../assets/images/xs/avatar3.jpg';
import avatar4 from '../../assets/images/xs/avatar4.jpg';
import avatar5 from '../../assets/images/xs/avatar5.jpg';
import avatar6 from '../../assets/images/xs/avatar6.jpg';
import avatar7 from '../../assets/images/xs/avatar7.jpg';

const Dashboard = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h1>Creative Dashboard</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Creative Platform</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Creator Dashboard</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <a href="/" className="btn btn-sm btn-primary" title="">Create Campaign</a>
                        </div>
                    </div>
                </div>

                <div className="row clearfix">
                    <div className="col-12">
                        <form className="card" action="" method="post">
                            <div className="body">
                                <div className="row">
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                        <div className="form-group">
                                            <label className="form-label">CRTV Tokens</label>
                                            <input type="number" className="form-control" min="0" max="9999999" placeholder="23097" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                        <div className="form-group">
                                            <label className="form-label">Amount</label>
                                            <input type="number" className="form-control" min="0" placeholder="2" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Type</label>
                                            <select className="custom-select">
                                                <option defaultValue="1">AAVE</option>
                                                <option defaultValue="2">DAI</option>
                                                <option defaultValue="5">GHST</option>
                                                <option defaultValue="3">USDA</option>
                                                <option defaultValue="4">WETH</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-12">
                                        <div className="form-group">
                                            <label className="form-label">Wallet address</label>
                                            <input type="text" className="form-control" maxlength="34" placeholder="0OXD38D9EEB5B93E1D3862727635E9" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-12">
                                            <label className="form-label">&nbsp;</label>
                                            <button type="submit" className="btn btn-success btn-block">💱 SWAP NOW</button>
                                        </div>
                                    </div>
                                </div>
                        </form>
                    </div>
                </div>

                <div className="row clearfix">
                    <div className="col-sm-6 col-lg-3">
                        <div className="card">
                            <div clasName="header">
                                <div className="row clearfix">
                                    <div className="col-auto">
                                        <div className="stamp">
                                            <h3>🚌Tour Pool</h3>
                                        </div>
                                        <div className="text-muted">Ends: 04-05-2021</div>
                                        <div className="h4 m-0">0.098140</div> 
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-12">
                                        <button className="btn btn-sm btn-outline-secondary mr-1" id="one_month">1M</button>
                                        <button className="btn btn-sm btn-outline-secondary mr-1" id="six_months">6M</button>
                                        <button className="btn btn-sm btn-outline-secondary mr-1 active" id="one_year">1Y</button>
                                        <button className="btn btn-sm btn-outline-secondary mr-1" id="ytd">YTD</button>
                                        <button className="btn btn-sm btn-outline-secondary" id="all">ALL</button>
                                        <div id="apexspark1">
                                            <Spark1 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                    <div className="card">
                            <div clasName="header">
                                <div className="row clearfix">
                                    <div className="col-auto">
                                        <div className="stamp">
                                            <h3>💿 Album Pool</h3>
                                        </div>
                                        <div className="text-muted">Ends: 02-20-2021</div>
                                        <div className="h4 m-0">0.198052</div>
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-12">
                                    <button className="btn btn-sm btn-outline-secondary mr-1" id="one_month">1M</button>
                                    <button className="btn btn-sm btn-outline-secondary mr-1" id="six_months">6M</button>
                                    <button className="btn btn-sm btn-outline-secondary mr-1 active" id="one_year">1Y</button>
                                    <button className="btn btn-sm btn-outline-secondary mr-1" id="ytd">YTD</button>
                                    <button className="btn btn-sm btn-outline-secondary" id="all">ALL</button>
                                    <div id="apexspark2">
                                        <Spark2 />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                    <div className="card">
                            <div clasName="header">
                                <div className="row clearfix">
                                    <div className="col-auto">
                                        <div className="stamp">
                                            <h3>🎥 M/V Pool</h3>
                                        </div>
                                        <div className="text-muted">Ends: 03-01-2021</div>
                                        <div className="h4 m-0">0.017062</div>
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-12">
                                    <button className="btn btn-sm btn-outline-secondary mr-1" id="one_month">1M</button>
                                    <button className="btn btn-sm btn-outline-secondary mr-1" id="six_months">6M</button>
                                    <button className="btn btn-sm btn-outline-secondary mr-1 active" id="one_year">1Y</button>
                                    <button className="btn btn-sm btn-outline-secondary mr-1" id="ytd">YTD</button>
                                    <button className="btn btn-sm btn-outline-secondary" id="all">ALL</button>
                                    <div id="apexspark3">
                                        <Spark3 />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                    <div className="card">
                            <div clasName="header">
                                <div className="row clearfix">
                                    <div className="col-auto">
                                        <div className="stamp">
                                            <h3>🤝🏽 Features</h3>
                                        </div>
                                        <div className="text-muted">Ends: 02-04-2021</div>
                                        <div className="h4 m-0">0.017062</div>
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-12">
                                    <button className="btn btn-sm btn-outline-secondary mr-1" id="one_month">1M</button>
                                    <button className="btn btn-sm btn-outline-secondary mr-1" id="six_months">6M</button>
                                    <button className="btn btn-sm btn-outline-secondary mr-1 active" id="one_year">1Y</button>
                                    <button className="btn btn-sm btn-outline-secondary mr-1" id="ytd">YTD</button>
                                    <button className="btn btn-sm btn-outline-secondary" id="all">ALL</button>
                                    <div id="apexspark7">
                                        <Spark7 />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row clearfix">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="card">
                            <div className="header">
                                <h1>🔍 My Watchlist </h1>
                            </div>
                            <table className="table table-hover table-custom spacing5 m-t--5 mb-0">
                                <tbody>
                                    <tr>
                                        <td className="font-weight-bold"><img src={BTC} alt="BTC"/> BTC</td>
                                        <td className="text-right">50000.098140 <span className="text-success">(0.25%) <i className="fa fa-caret-up"></i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold"><img src={ETH} alt="ETH"/> ETH</td>
                                        <td className="text-right">1956.3 <span className="text-danger">(-0.15%) <i className="fa fa-caret-down"></i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold"><img src={logo} alt="CRTV"/> CRTV</td>
                                        <td className="text-right">89.74 <span className="text-success">(0.85%) <i className="fa fa-caret-up"></i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold"><img src={LTC} alt="LTC"/> AAVE</td>
                                        <td className="text-right">210.04 <span className="text-success">(0.65%) <i className="fa fa-caret-up"></i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold"><img src={stellar} alt="XLM"/> MATIC</td>
                                        <td className="text-right">110.04 <span className="text-success">(0.65%) <i className="fa fa-caret-up"></i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold"><img src={DASH} alt="DASH"/> GRT</td>
                                        <td className="text-right">28.47 <span className="text-danger">(-0.42%) <i className="fa fa-caret-down"></i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold"><img src={BTG} alt="BTG"/> GHST</td>
                                        <td className="text-right">18.75 <span className="text-danger">(-0.63%) <i className="fa fa-caret-down"></i></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="card">
                            <div className="header">
                                <h1>💰 Revenue</h1>
                            </div>
                            <div className="body">
                            <div className="row clearfix">
                                    <div className="col-12">
                                        <button className="btn btn-sm btn-outline-secondary mr-1" id="one_month">1M</button>
                                        <button className="btn btn-sm btn-outline-secondary mr-1" id="six_months">6M</button>
                                        <button className="btn btn-sm btn-outline-secondary mr-1 active" id="one_year">1Y</button>
                                        <button className="btn btn-sm btn-outline-secondary mr-1" id="ytd">YTD</button>
                                        <button className="btn btn-sm btn-outline-secondary" id="all">ALL</button>
                                        <div id="stacked">
                                            <Stacked />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
                    
                    
                    <div classname="row clearfix">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h2>Transaction List</h2>
                            </div>
                            <ul className="nav nav-tabs3">
                                <li className="nav-item"><a className="nav-link active show" data-toggle="tab" href="#Buy-new2">Brand Pools</a></li>
                                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Sell-new2">Creator Pools</a></li>
                            </ul>
                            <div className="tab-content mt-0">
                                <div className="tab-pane active show" id="Buy-new2">
                                    <div className="table-responsive">
                                        <table className="table table-hover table-custom spacing8">
                                            <tbody>
                                                <tr>
                                                    <td className="w60"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2fd32b58324945.59f83720f0b79.jpg" alt="Coca-Cola" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Coca-Cola</p></td>
                                                    <td><span>11:20AM 17 Nov 2018</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 BTC</strong></td>
                                                    <td className="w100 text-info"><strong>$8,309</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="https://fsa.zobj.net/crop.php?r=L8HK64RCSOae4dYLBEsB5v_ZZt5hVWfS5C1qL8s7CzRek-syB6Nyehsl8BbFgktB6v0iUDf_MTvetqC6szCwj1yjAQIUziCrekbaUjliOjfTTFXpnREYGYkXza3cH5TDiHqg5x6luPGKQN6j" alt="Nike" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Nike</p></td>
                                                    <td><span>11:20AM 17 Nov 2018</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-warning">Processing</span></td>
                                                    <td><strong>0.108762 ETC</strong></td>
                                                    <td className="w100 text-info"><strong>$8,309</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="https://cdn.redmondpie.com/wp-content/uploads/2014/04/Samsung-logo.png" alt="Samsung" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Samsung</p></td>
                                                    <td><span>11:20AM 17 Nov 2018</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 ETH</strong></td>
                                                    <td className="w100 text-info"><strong>$11,309</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="../assets/images/coin/neo.svg" alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">NEO</p></td>
                                                    <td><span>12:20PM 5 Nov 2018</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 NEO</strong></td>
                                                    <td className="w100 text-info"><strong>$3,102</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDr_RlXNO6WF7uEL6pkBfjIGgCqAhyLqGFCA&usqp=CAU" alt="Dame Dash Studios" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Dame Dash Studios</p></td>
                                                    <td><span>11:20AM 7 Nov 2018</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-danger">Stopped</span></td>
                                                    <td><strong>0.108762 LTC</strong></td>
                                                    <td className="w100 text-info"><strong>$8,309</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAkFBMVEUAAAAc54MjIyNaWlod7occ64UUekMPgkoWuGgDGg4ToVsd74cRi08b4oAb3n4LWTIJTSsb03cIIxIWl1QVrGENckEFLRka2XsACAQXvWse9osGNB0FKhgYxnAUpl4VsGQXmVQDFQwABgMNajwISCgKVjEHHQ8Qh0wHPiMLYDYYw28HPCIZznQRklMVfUQLRSZUENuRAAADOElEQVR4nO3bbV/aMBTG4XZLilBAqiAiKD6j+PT9v93mapuTLqVtrNq5//XO5nA09y8iTWPwAx4CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoLuG8yQzf2q9e2S6J2etd/9C50pn1KD17hvRfa/17l/oUIcZ3X5sPWW6E1ttxOaF2LwQmxdi80JsXojNC7F5ITYvxOaF2LwQm5f/JrbjfubYVX6RD/dv7YK+a8Qdmyy9tJrcipE2Z9k6Gdtimoy1yujR4+CmWL6N8/GTyBoZKTNyn110xxaKJhPZ4ygWTQ7an2x7RGyh1uKLP1/H855dvjAVamaNjM3r1H520R3byJTGdmzyh/lnYnPQKlnK8lqxxfVjU98zttclJ2dGbKnK2EIdivVGbKnq2EL9aMqJLVUjtjC+ysuJLVUnNr3Iy4ktVSe2UOflxJYqxvb2VNO+aD5dEVvKik2r8Tw1VvK6SYjYUtZdQnKdX5/MxYDaZJeJLWWttr4YWMnVNsyuEltK3sqvrRGZELEVlO+3TYmtHLF5ITYvxOaF2LwQm5d3xPZslcud7gab4tbTiqUp/7axiX2R327EjE0W7tjEwrS/Z0/G1ulHVw1jWztvuYLgIBED8V122R2bvG/T96bJSyiYXZcuahjbwLrDT6ZvFtaeicp7uGM7tYofsyZbsdbCcPQJk/fXMLbImlp+et7eaBrnPdyxnenqJnr7CZP31zC2Bys2N3Fv645tVqOJav9/S9rUMDbrfalEbD6ZuGM7rrGjrF4+fu7v0DS2TY2VYnqUHJ1ZV+Ymn5Z1UdPYgnHVlGPx61US26oytlj8ge2ixrFdVSw3nYgeZQe1oriiifWZsIMaxxYMd05Zj45Eben5tsHuJnPnKbEOaR5bEBUfbAlq9CBLy48FDuMdTZJO3yG88ogtWE21ck1aK3VmL5Mdpykf9lRJE334ITNt1flJfhAvtv9Rdi0O7xU/RPU3W3EMMDtGePq0KtRtRPe/3q5Ww1NHk23vouUpfoTJc5R5ts9O7ouRa8crlzezSLgrRvbqRfRw/m20m8yWnd72AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAISf8PALaY1KBHBDC9IAAAAASUVORK5CYII=" alt="Hulu" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Hulu</p></td>
                                                    <td><span>12:20PM 5 Nov 2018</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 QTUM</strong></td>
                                                    <td className="w100 text-info"><strong>$3,102</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="https://moneyinc.com/wp-content/uploads/2018/06/Lamborghini.jpg" alt="Lamborghini" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Lamborghini</p></td>
                                                    <td><span>12:20PM 5 Nov 2018</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 USDT</strong></td>
                                                    <td className="w100 text-info"><strong>$102</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane" id="Sell-new2">
                                    <div className="table-responsive">
                                        <table className="table table-hover table-custom spacing8">
                                            <tbody>
                                                <tr>
                                                    <td className="w60"><img src={avatar1} alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Snoh Aalegra</p></td>
                                                    <td><span>11:20AM 17 Nov 2018</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 BTC</strong></td>
                                                    <td className="w100 text-info"><strong>$8,309</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src={avatar2} alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Tyler, The Creator</p></td>
                                                    <td><span>11:20AM 17 Nov 2018</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 ETH</strong></td>
                                                    <td className="w100 text-info"><strong>$11,309</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src={avatar3} alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Travis Scott</p></td>
                                                    <td><span>12:20PM 5 Nov 2018</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 QTUM</strong></td>
                                                    <td className="w100 text-info"><strong>$3,102</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src={avatar4} alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Flipp Dinero</p></td>
                                                    <td><span>12:20PM 5 Nov 2018</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 USDT</strong></td>
                                                    <td className="w100 text-info"><strong>$102</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src={avatar5} alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Marshmello</p></td>
                                                    <td><span>11:20AM 17 Nov 2018</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-warning">Processing</span></td>
                                                    <td><strong>0.108762 ETC</strong></td>
                                                    <td className="w100 text-info"><strong>$8,309</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src={avatar6} alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Gucci Mane</p></td>
                                                    <td><span>12:20PM 5 Nov 2018</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 NEO</strong></td>
                                                    <td className="w100 text-info"><strong>$3,102</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src={avatar7} alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Drake</p></td>
                                                    <td><span>11:20AM 7 Nov 2018</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-danger">Stopped</span></td>
                                                    <td><strong>0.108762 LTC</strong></td>
                                                    <td className="w100 text-info"><strong>$8,309</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    </div>
        </>
    );
}


export default Dashboard;
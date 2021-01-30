import React from 'react';
import { Link } from 'react-router-dom';
import Spark1 from '../common/apexChart/spark1'
import Spark2 from '../common/apexChart/spark2';
import Spark3 from '../common/apexChart/spark3';
import Spark7 from '../common/apexChart/spark7';

const Dashboard = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h1>Cryptocurrency</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Creative Platform</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Cryptocurrency</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <a href="/" className="btn btn-sm btn-primary" title="">Create Campaign</a>
                            <a href="/" className="btn btn-sm btn-success" title="Button"><i className="icon-basket"></i> Button</a>
                        </div>
                    </div>
                </div>

                <div className="row clearfix">
                    <div className="col-sm-6 col-lg-3">
                        <div className="card">
                            <div clasName="header">
                                <div className="row clearfix">
                                    <div className="col-auto">
                                        <div className="stamp">
                                            <img src="/" className="w40" alt="Allstate" />
                                        </div>
                                        <div className="text-muted">Coverage Commercial (Audio)</div>
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
                                    <div className="row clearfix">
                                        <div className="col text-right">
                                            {/* Action button */}
                                            <button type="button" className="btn btn-sm btn-outline-secondary"><span>Deposit</span></button>
                                        </div>
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
                                            <img src="/" className="w40" alt="Hulu" />
                                        </div>
                                        <div className="text-muted">Drama TV Show (Pilot)</div>
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
                                    <div className="row clearfix">
                                        <div className="col text-right">
                                            {/* Action button */}
                                            <button type="button" className="btn btn-sm btn-outline-secondary"><span>Deposit</span></button>
                                        </div>
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
                                            <img src="/" className="w40" alt="Tesla" />
                                        </div>
                                        <div className="text-muted">Model Y Commercial (Audio)</div>
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
                                    <div className="row clearfix">
                                        <div className="col text-right">
                                            {/* Action button */}
                                            <button type="button" className="btn btn-sm btn-outline-secondary"><span>Deposit</span></button>
                                        </div>
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
                                            <img src="/" className="w40" alt="Netflix" />
                                        </div>
                                        <div className="text-muted">Movie Campaign (Trailer)</div>
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
                                    <div className="row clearfix">
                                        <div className="col text-right">
                                            {/* Action button */}
                                            <button type="button" className="btn btn-sm btn-outline-secondary"><span>Deposit</span></button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                            <label className="form-label">ICO Token</label>
                                            <input type="email" className="form-control" placeholder="23097" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                        <div className="form-group">
                                            <label className="form-label">ETH</label>
                                            <input type="email" className="form-control" placeholder="2" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Select</label>
                                            <select className="custom-select">
                                                <option defaultValue="">ETH</option>
                                                <option defaultValue="1">BTC</option>
                                                <option defaultValue="2">LTC</option>
                                                <option defaultValue="3">USDT</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-12">
                                        <div className="form-group">
                                            <label className="form-label">Wallet address</label>
                                            <input type="email" className="form-control" placeholder="0OXD38D9EEB5B93E1D3862727635E9" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-12">
                                        <div className="form-group">
                                            <label className="form-label">&nbsp;</label>
                                            <button type="submit" className="btn btn-success btn-block">Buy now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row clearfix">
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="card">
                            <div className="header">
                                <h2>My Watchlist </h2>
                            </div>
                            <table className="table table-hover table-custom spacing5 m-t--5 mb-0">
                                <tbody>
                                    <tr>
                                        <td className="font-weight-bold">BTC</td>
                                        <td className="text-right">50000.098140 <span className="text-success">(0.25%) <i className="fa fa-caret-up"></i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold">ETH</td>
                                        <td className="text-right">1956.3 <span className="text-danger">(-0.15%) <i className="fa fa-caret-down"></i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold">CRTV</td>
                                        <td className="text-right">89.74 <span className="text-success">(0.85%) <i className="fa fa-caret-up"></i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold">AAVE</td>
                                        <td className="text-right">210.04 <span className="text-success">(0.65%) <i className="fa fa-caret-up"></i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold">MATIC</td>
                                        <td className="text-right">110.04 <span className="text-success">(0.65%) <i className="fa fa-caret-up"></i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold">GRT</td>
                                        <td className="text-right">28.47 <span className="text-danger">(-0.42%) <i className="fa fa-caret-down"></i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold">GHST</td>
                                        <td className="text-right">18.75 <span className="text-danger">(-0.63%) <i className="fa fa-caret-down"></i></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-12">
                        <div className="card">
                            <div className="header">
                                <h2>Monthly Overview</h2>
                            </div>
                            <div className="body">
                                <div id="chart-temperature" style={{ height: "315px" }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h2>Transaction List</h2>
                            </div>
                            <ul className="nav nav-tabs3">
                                <li className="nav-item"><a className="nav-link active show" data-toggle="tab" href="#Buy-new2">Buy</a></li>
                                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Sell-new2">Sell</a></li>
                            </ul>
                            <div className="tab-content mt-0">
                                <div className="tab-pane active show" id="Buy-new2">
                                    <div className="table-responsive">
                                        <table className="table table-hover table-custom spacing8">
                                            <tbody>
                                                <tr>
                                                    <td className="w60"><img src="../assets/images/coin/BTC.svg" alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Bitcoin</p></td>
                                                    <td><span>11:20AM 17 Nov 2018</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 BTC</strong></td>
                                                    <td className="w100 text-info"><strong>$8,309</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="../assets/images/coin/ETH.svg" alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Ethereum Classic</p></td>
                                                    <td><span>11:20AM 17 Nov 2018</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-warning">Processing</span></td>
                                                    <td><strong>0.108762 ETC</strong></td>
                                                    <td className="w100 text-info"><strong>$8,309</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="../assets/images/coin/ETC.svg" alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Ethereum</p></td>
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
                                                    <td className="w60"><img src="../assets/images/coin/LTC.svg" alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Litecoin</p></td>
                                                    <td><span>11:20AM 7 Nov 2018</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-danger">Stopped</span></td>
                                                    <td><strong>0.108762 LTC</strong></td>
                                                    <td className="w100 text-info"><strong>$8,309</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="../assets/images/coin/qtum.svg" alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Qtum</p></td>
                                                    <td><span>12:20PM 5 Nov 2018</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 QTUM</strong></td>
                                                    <td className="w100 text-info"><strong>$3,102</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="../assets/images/coin/XRP.svg" alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Tether</p></td>
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
                                                    <td className="w60"><img src="../assets/images/coin/BTC.svg" alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Bitcoin</p></td>
                                                    <td><span>11:20AM 17 Nov 2018</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 BTC</strong></td>
                                                    <td className="w100 text-info"><strong>$8,309</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="../assets/images/coin/ETC.svg" alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Ethereum</p></td>
                                                    <td><span>11:20AM 17 Nov 2018</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 ETH</strong></td>
                                                    <td className="w100 text-info"><strong>$11,309</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="../assets/images/coin/qtum.svg" alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Qtum</p></td>
                                                    <td><span>12:20PM 5 Nov 2018</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 QTUM</strong></td>
                                                    <td className="w100 text-info"><strong>$3,102</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="../assets/images/coin/XRP.svg" alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Tether</p></td>
                                                    <td><span>12:20PM 5 Nov 2018</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 USDT</strong></td>
                                                    <td className="w100 text-info"><strong>$102</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="../assets/images/coin/ETH.svg" alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Ethereum Classic</p></td>
                                                    <td><span>11:20AM 17 Nov 2018</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-warning">Processing</span></td>
                                                    <td><strong>0.108762 ETC</strong></td>
                                                    <td className="w100 text-info"><strong>$8,309</strong></td>
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
                                                    <td className="w60"><img src="../assets/images/coin/LTC.svg" alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Litecoin</p></td>
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


export default Dashboard
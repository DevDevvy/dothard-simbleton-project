import {getCompanies, agents} from "./database.js"

import { companyList } from "./BusinessList.js"
import { newYorkCompanyList } from "./NewYork.js"
import { manufacturingList } from "./Manufacturing.js"
import { PurchaserList } from "./PurchasingAgents.js"

const coList = companyList()
const newYork = newYorkCompanyList()
const agentObj = agents()
const listedCompanies = getCompanies()
const manufactorsHTMLRender = manufacturingList()
const Purchasers = PurchaserList()

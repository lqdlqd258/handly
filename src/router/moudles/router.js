import index from '@/views/index'
import login from '@/views/login/login'

import homeindex from '@/views/home/homeindex'

import extension from '@/views/pbx/extension'
import grouping from '@/views/pbx/grouping'
import sipphone from '@/views/pbx/sipphone'
import addressbook from '@/views/pbx/addressbook'
import callrecording from '@/views/pbx/callrecording'
import callforwarding from '@/views/pbx/callforwarding'
import morningcall from '@/views/pbx/morningcall'
import sms from '@/views/pbx/sms'
import callrecords from '@/views/pbx/callrecords'
import callbilling from '@/views/pbx/callbilling'

import getCcuinfo from '@/views/kong/getCcuinfo'
import smartdevice from '@/views/kong/smartdevice'
import reddevList from '@/views/kong/reddevList'
import datamonitoring from '@/views/kong/datamonitoring'

import assistantinfo from '@/views/ai/assistantinfo'
import attendancerules from '@/views/ai/attendancerules'
import attendancerecord from '@/views/ai/attendancerecord'
import attendancestatistics from '@/views/ai/attendancestatistics'
import makeRule from '@/views/ai/makeRule'
import answerassistant from '@/views/ai/answerassistant'
import travellist from '@/views/ai/travellist'
import employeeLibrary from '@/views/ai/employeeLibrary'
import visitingrecord from '@/views/ai/visitingrecord'

import callreport from '@/views/report/callreport'

import ippbxstatus from '@/views/system/ippbxstatus'
import adminList from '@/views/system/adminList'
import internet from '@/views/system/internet'
import ipblacklist from '@/views/system/ipblacklist'
import ipwhitelist from '@/views/system/ipwhitelist'

const routers = {
    mode:'history',
    routes:[
      {
        path: '/login',
        name: 'login',
        component: login
      },
      {
        path: '/',
        name: 'index',
        meta:{
          requireAuth:true
        },
        component: index,
        children:[
          {
            path: 'homeindex',
            name: 'homeindex',
            meta:{
              requireAuth:true
            },
            component: homeindex
          },


          {
            path: 'extension',
            name: 'extension',
            meta:{
              requireAuth:true
            },
            component: extension
          },
          {
            path: 'grouping',
            name: 'grouping',
            meta:{
              requireAuth:true
            },
            component: grouping
          },
          {
            path:'sipphone',
            name:'sipphone',
            meta:{
              requireAuth:true
            },
            component: sipphone
          },
          {
            path: 'addressbook',
            name: 'addressbook',
            meta:{
              requireAuth:true
            },
            component: addressbook
          },
          {
            path:'callrecording',
            name:'callrecording',
            meta:{
              requireAuth:true
            },
            component: callrecording
          },
          {
            path:'callforwarding',
            name:'callforwarding',
            meta:{
              requireAuth:true
            },
            component: callforwarding
          },
          {
            path:'morningcall',
            name:'morningcall',
            meta:{
              requireAuth:true
            },
            component: morningcall
          },
          {
            path:'sms',
            name:'sms',
            meta:{
              requireAuth:true
            },
            component: sms
          },
          {
            path:'callrecords',
            name:'callrecords',
            meta:{
              requireAuth:true
            },
            component: callrecords
          },
          {
            path:'callbilling',
            name:'callbilling',
            meta:{
              requireAuth:true
            },
            component: callbilling
          },


          {
            path:'getCcuinfo',
            name:'getCcuinfo',
            meta:{
              requireAuth:true
            },
            component: getCcuinfo
          },
          {
            path:'smartdevice',
            name:'smartdevice',
            meta:{
              requireAuth:true
            },
            component: smartdevice
          },
          {
            path:'reddevList',
            name:'reddevList',
            meta:{
              requireAuth:true
            },
            component: reddevList
          },
          {
            path:'datamonitoring',
            name:'datamonitoring',
            meta:{
              requireAuth:true
            },
            component: datamonitoring
          },


          {
            path:'assistantinfo',
            name:'assistantinfo',
            meta:{
              requireAuth:true
            },
            component: assistantinfo
          },
          {
            path:'attendancerules',
            name:'attendancerules',
            meta:{
              requireAuth:true
            },
            component: attendancerules
          },
          {
            path:'attendancerecord',
            name:'attendancerecord',
            meta:{
              requireAuth:true
            },
            component: attendancerecord
          },
          {
            path:'attendancestatistics',
            name:'attendancestatistics',
            meta:{
              requireAuth:true
            },
            component: attendancestatistics
          },
          {
            path:'makeRule',
            name:'makeRule',
            meta:{
              requireAuth:true
            },
            component: makeRule
          },
          {
            path:'answerassistant',
            name:'answerassistant',
            meta:{
              requireAuth:true
            },
            component: answerassistant
          },
          {
            path:'travellist',
            name:'travellist',
            meta:{
              requireAuth:true
            },
            component: travellist
          },
          {
            path:'employeeLibrary',
            name:'employeeLibrary',
            meta:{
              requireAuth:true
            },
            component: employeeLibrary
          },
          {
            path:'visitingrecord',
            name:'visitingrecord',
            meta:{
              requireAuth:true
            },
            component: visitingrecord
          },


          {
            path:'callreport',
            name:'callreport',
            meta:{
              requireAuth:true
            },
            component: callreport
          },


          {
            path:'ippbxstatus',
            name:'ippbxstatus',
            meta:{
              requireAuth:true
            },
            component: ippbxstatus
          },
          {
            path:'adminList',
            name:'adminList',
            meta:{
              requireAuth:true
            },
            component: adminList
          },
          {
            path:'internet',
            name:'internet',
            meta:{
              requireAuth:true
            },
            component: internet
          },
          {
            path:'ipblacklist',
            name:'ipblacklist',
            meta:{
              requireAuth:true
            },
            component: ipblacklist
          },
          {
            path:'ipwhitelist',
            name:'ipwhitelist',
            meta:{
              requireAuth:true
            },
            component: ipwhitelist
          }
        ]
      }
    ]
}

export default routers
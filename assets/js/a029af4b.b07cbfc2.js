"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[109],{5885:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>d});var r=i(3117),o=(i(7294),i(3905));const s={title:"Review Workflows",description:"Review workflow technical design",tags:["review-workflows","implementation","tech design"]},a="Review Workflows",n={unversionedId:"docs/core/admin/ee/review-workflows",id:"docs/core/admin/ee/review-workflows",title:"Review Workflows",description:"Review workflow technical design",source:"@site/docs/docs/01-core/admin/01-ee/01-review-workflows.md",sourceDirName:"docs/01-core/admin/01-ee",slug:"/docs/core/admin/ee/review-workflows",permalink:"/docs/core/admin/ee/review-workflows",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/admin/01-ee/01-review-workflows.md",tags:[{label:"review-workflows",permalink:"/tags/review-workflows"},{label:"implementation",permalink:"/tags/implementation"},{label:"tech design",permalink:"/tags/tech-design"}],version:"current",sidebarPosition:1,frontMatter:{title:"Review Workflows",description:"Review workflow technical design",tags:["review-workflows","implementation","tech design"]},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/core/admin/ee/intro"},next:{title:"useLicenseLimits",permalink:"/docs/core/admin/ee/hooks/use-license-limits"}},l={},d=[{value:"Summary",id:"summary",level:2},{value:"Detailed backend design",id:"detailed-backend-design",level:2},{value:"Content types",id:"content-types",level:3},{value:"strapi_workflows",id:"strapi_workflows",level:4},{value:"strapi_workflows_stages",id:"strapi_workflows_stages",level:4},{value:"Controllers",id:"controllers",level:3},{value:"workflows",id:"workflows",level:4},{value:"stages",id:"stages",level:4},{value:"Middlewares",id:"middlewares",level:3},{value:"contentTypeMiddleware",id:"contenttypemiddleware",level:4},{value:"Routes",id:"routes",level:3},{value:"GET <code>/review-workflows/workflows</code>",id:"get-review-workflowsworkflows",level:4},{value:"GET <code>/review-workflows/workflows/:id</code>",id:"get-review-workflowsworkflowsid",level:4},{value:"GET <code>/review-workflows/workflows/:workflow_id/stages</code>",id:"get-review-workflowsworkflowsworkflow_idstages",level:4},{value:"GET <code>/review-workflows/workflows/:workflow_id/stages/:id</code>",id:"get-review-workflowsworkflowsworkflow_idstagesid",level:4},{value:"PUT <code>/review-workflows/workflows/:workflow_id/stages</code>",id:"put-review-workflowsworkflowsworkflow_idstages",level:4},{value:"PUT <code>/content-manager/(collection|single)-types/:model_uid/:id/stage</code>",id:"put-content-managercollectionsingle-typesmodel_uididstage",level:4},{value:"Services",id:"services",level:3},{value:"review-workflows",id:"review-workflows-1",level:4},{value:"workflows",id:"workflows-1",level:4},{value:"stages",id:"stages-1",level:4},{value:"metrics",id:"metrics",level:4},{value:"Decorators",id:"decorators",level:3},{value:"Entity Service",id:"entity-service",level:4},{value:"Alternatives",id:"alternatives",level:2},{value:"Resources",id:"resources",level:2}],w={toc:d};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},w,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"review-workflows"},"Review Workflows"),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"The review workflow feature is only available in the Enterprise Edition.\nThat is why, in part, it is completely decoupled from the code of the Community Edition."),(0,o.kt)("p",null,"The purpose of this feature is to allow users to assign a tag to the various entities of their Strapi project. This tag is called a 'stage' and is available within what we will call a workflow."),(0,o.kt)("h2",{id:"detailed-backend-design"},"Detailed backend design"),(0,o.kt)("p",null,"The Review Workflow feature have been built with one main consideration, to be decoupled from the Community Edition. As so, the implementation can relate a lot to how a plugin would be built."),(0,o.kt)("p",null,"All the backend code related to Review Workflow can be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/core/admin/ee"),".\nThis code is separated into several elements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Two content-types",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"strapi_workflows"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"packages/core/admin/ee/server/content-types/workflow/index.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"strapi_workflows_stages"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"packages/core/admin/ee/server/content-types/workflow-stage/index.js")))),(0,o.kt)("li",{parentName:"ul"},"Two controllers",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"workflows"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"packages/core/admin/ee/server/controllers/workflows/index.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"stages"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"packages/core/admin/ee/server/controllers/workflows/stages/index.js")))),(0,o.kt)("li",{parentName:"ul"},"One middleware",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"contentTypeMiddleware"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"packages/core/admin/ee/server/middlewares/review-workflows.js")))),(0,o.kt)("li",{parentName:"ul"},"Routes",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"packages/core/admin/ee/server/routes/index.js")))),(0,o.kt)("li",{parentName:"ul"},"Four services",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"review-workflows"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"packages/core/admin/ee/server/services/review-workflows/review-workflows.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"workflows"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"packages/core/admin/ee/server/services/review-workflows/workflows.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"stages"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"packages/core/admin/ee/server/services/review-workflows/stages.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"metrics"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"packages/core/admin/ee/server/services/review-workflows/metrics.js")))),(0,o.kt)("li",{parentName:"ul"},"One decorator",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"EntityService")," decorator: ",(0,o.kt)("inlineCode",{parentName:"li"},"packages/core/admin/ee/server/services/review-workflows/entity-service-decorator.js")))),(0,o.kt)("li",{parentName:"ul"},"One utils file",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Review workflows utils"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"packages/core/admin/ee/server/utils/review-workflows.js")))),(0,o.kt)("li",{parentName:"ul"},"A bootstrap and a register part",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"packages/core/admin/ee/server/bootstrap.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"packages/core/admin/ee/server/register.js"))))),(0,o.kt)("h3",{id:"content-types"},"Content types"),(0,o.kt)("h4",{id:"strapi_workflows"},"strapi_workflows"),(0,o.kt)("p",null,"This content type stores the workflow information and is responsible for holding all the information about stages and their order. In MVP, only one workflow is stored inside the Strapi database."),(0,o.kt)("h4",{id:"strapi_workflows_stages"},"strapi_workflows_stages"),(0,o.kt)("p",null,"This content type store the stage information such as its name."),(0,o.kt)("h3",{id:"controllers"},"Controllers"),(0,o.kt)("h4",{id:"workflows"},"workflows"),(0,o.kt)("p",null,"Used to interact with the ",(0,o.kt)("inlineCode",{parentName:"p"},"strapi_workflows")," content-type."),(0,o.kt)("h4",{id:"stages"},"stages"),(0,o.kt)("p",null,"Used to interact with the ",(0,o.kt)("inlineCode",{parentName:"p"},"strapi_workflows_stages")," content-type."),(0,o.kt)("h3",{id:"middlewares"},"Middlewares"),(0,o.kt)("h4",{id:"contenttypemiddleware"},"contentTypeMiddleware"),(0,o.kt)("p",null,"In order to properly manage the options for content-type in the root level of the object, it is necessary to relocate the ",(0,o.kt)("inlineCode",{parentName:"p"},"reviewWorkflows")," option within the ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," object located inside the content-type data. By doing so, we can ensure that all options are consistently organized and easily accessible within their respective data structures. This will also make it simpler to maintain and update the options as needed, providing a more streamlined and efficient workflow for developers working with the system. Therefore, it is recommended to move the reviewWorkflows option to its appropriate location within the options object inside the content-type data before sending it to the admin API."),(0,o.kt)("h3",{id:"routes"},"Routes"),(0,o.kt)("p",null,"The Admin API of the Enterprise Edition includes several routes related to the Review Workflow feature. Here is a list of those routes:"),(0,o.kt)("h4",{id:"get-review-workflowsworkflows"},"GET ",(0,o.kt)("inlineCode",{parentName:"h4"},"/review-workflows/workflows")),(0,o.kt)("p",null,"This route returns a list of all workflows."),(0,o.kt)("h4",{id:"get-review-workflowsworkflowsid"},"GET ",(0,o.kt)("inlineCode",{parentName:"h4"},"/review-workflows/workflows/:id")),(0,o.kt)("p",null,"This route returns the details of a specific workflow identified by the id parameter."),(0,o.kt)("h4",{id:"get-review-workflowsworkflowsworkflow_idstages"},"GET ",(0,o.kt)("inlineCode",{parentName:"h4"},"/review-workflows/workflows/:workflow_id/stages")),(0,o.kt)("p",null,"This route returns a list of all stages associated with a specific workflow identified by the workflow_id parameter."),(0,o.kt)("h4",{id:"get-review-workflowsworkflowsworkflow_idstagesid"},"GET ",(0,o.kt)("inlineCode",{parentName:"h4"},"/review-workflows/workflows/:workflow_id/stages/:id")),(0,o.kt)("p",null,"This route returns the details of a specific stage identified by the id parameter and associated with the workflow identified by the workflow_id parameter."),(0,o.kt)("h4",{id:"put-review-workflowsworkflowsworkflow_idstages"},"PUT ",(0,o.kt)("inlineCode",{parentName:"h4"},"/review-workflows/workflows/:workflow_id/stages")),(0,o.kt)("p",null,"This route updates the stages associated with a specific workflow identified by the workflow_id parameter. The updated stages are passed in the request body."),(0,o.kt)("h4",{id:"put-content-managercollectionsingle-typesmodel_uididstage"},"PUT ",(0,o.kt)("inlineCode",{parentName:"h4"},"/content-manager/(collection|single)-types/:model_uid/:id/stage")),(0,o.kt)("p",null,"This route updates the stage of a specific entity identified by the id parameter and belonging to a specific collection identified by the model_uid parameter. The new stage value is passed in the request body."),(0,o.kt)("h3",{id:"services"},"Services"),(0,o.kt)("p",null,"The Review Workflow feature of the Enterprise Edition includes several services to manipulate workflows and stages. Here is a list of those services:"),(0,o.kt)("h4",{id:"review-workflows-1"},"review-workflows"),(0,o.kt)("p",null,"This service is used during the bootstrap and register phases of Strapi. Its primary responsibility is to migrate data on entities as needed and add the stage field to the entity schemas."),(0,o.kt)("h4",{id:"workflows-1"},"workflows"),(0,o.kt)("p",null,"This service is used to manipulate the workflows entities. It provides functionalities to create, retrieve, and update workflows."),(0,o.kt)("h4",{id:"stages-1"},"stages"),(0,o.kt)("p",null,"This service is used to manipulate the stages entities and to update stages on other entities. It provides functionalities to create, retrieve, update, and delete stages."),(0,o.kt)("h4",{id:"metrics"},"metrics"),(0,o.kt)("p",null,"This is the telemetry service used to gather information on the usage of this feature. It provides information on the number of workflows and stages created, as well as the frequency of stage updates on entities."),(0,o.kt)("h3",{id:"decorators"},"Decorators"),(0,o.kt)("h4",{id:"entity-service"},"Entity Service"),(0,o.kt)("p",null,"The entity service is decorated so that entities can be linked to a default stage upon creation. This allows the entities to be automatically associated with a specific workflow stage when they are created."),(0,o.kt)("h2",{id:"alternatives"},"Alternatives"),(0,o.kt)("p",null,"The Review Workflow feature is currently included as a core feature within the Strapi repository. However, there has been discussion about potentially moving it to a plugin in the future. While no decision has been made on this subject yet, it is possible that it may happen at some point in the future."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.strapi.io/user-docs/settings/review-workflows"},"https://docs.strapi.io/user-docs/settings/review-workflows")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.strapi.io/user-docs/content-type-builder/creating-new-content-type#creating-a-new-content-type"},"https://docs.strapi.io/user-docs/content-type-builder/creating-new-content-type#creating-a-new-content-type")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.strapi.io/user-docs/users-roles-permissions/configuring-administrator-roles#plugins-and-settings"},"https://docs.strapi.io/user-docs/users-roles-permissions/configuring-administrator-roles#plugins-and-settings")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/core/content-manager/review-workflows"},"Content Manager Review Workflows")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/core/content-type-builder/review-workflows"},"Content Type Builder Review Workflows"))))}p.isMDXComponent=!0},3905:(e,t,i)=>{i.d(t,{Zo:()=>w,kt:()=>k});var r=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function n(e,t){if(null==e)return{};var i,r,o=function(e,t){if(null==e)return{};var i,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},w=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var i=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,w=n(e,["components","mdxType","originalType","parentName"]),c=d(i),k=o,u=c["".concat(l,".").concat(k)]||c[k]||p[k]||s;return i?r.createElement(u,a(a({ref:t},w),{},{components:i})):r.createElement(u,a({ref:t},w))}));function k(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=i.length,a=new Array(s);a[0]=c;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n.mdxType="string"==typeof e?e:o,a[1]=n;for(var d=2;d<s;d++)a[d]=i[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}c.displayName="MDXCreateElement"}}]);
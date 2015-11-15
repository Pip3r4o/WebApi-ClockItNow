﻿namespace BillableHoursWebApp.Api
{
    using System.Web;
    using System.Web.Http;
    using System.Web.Mvc;
    using System.Web.Optimization;
    using System.Web.Routing;

    using System.Reflection;
    using System.Web.Http.Dispatcher;
    using App_Start;
    using AutoMapper;
    using Common;
    using Data.Models;
    using DataTransferModels;
    using DataTransferModels.Project;

    public class WebApiApplication : HttpApplication
    {
        protected void Application_Start()
        {
            AutoMapperConfig.RegisterMappings(Assembly.Load(Constants.DataTransferModelsAssembly));
            Mapper.CreateMap<AttachmentRequestModel, Attachment>();
            Mapper.CreateMap<ProjectRequestModel, Project>();
            Mapper.CreateMap<ProjectWorkLogRequestModel, WorkLog>();
            // Mapper.CreateMap<Invoice, InvoiceResponseModel>();

            DatabaseConfig.Initialize();

            AreaRegistration.RegisterAllAreas();

            GlobalConfiguration.Configure(WebApiConfig.Register);

            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);

            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }
    }
}

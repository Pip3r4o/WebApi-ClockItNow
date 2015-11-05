﻿namespace BillableHoursWebApp.Data.Models
{
    using System.Collections.Generic;

    public class Client
    {
        private ICollection<Project> projects;
        private ICollection<Invoice> invoices;

        public Client()
        {
            this.projects = new HashSet<Project>();
            this.invoices = new HashSet<Invoice>();
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public bool IsOrganization { get; set; }

        public virtual ICollection<Project> Projects
        {
            get { return this.projects; }
            set { this.projects = value; }
        }

        public virtual ICollection<Invoice> Invoices
        {
            get { return this.invoices; }
            set { this.Invoices = value; }
        }
    }
}

using AutoFixture;
using System;
using AutoFixture.AutoMoq;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using web_api.Models;
using Moq;
using web_api.Services;
using Microsoft.EntityFrameworkCore;

namespace NotenAppApiTest.SubjectServiceTests
{
    public abstract class Infrastructure
    {

        protected readonly IFixture Fixture;
        protected readonly SchoolGradContext SchoolGradContext;
        protected readonly SubjectService SubjectService;

        protected Infrastructure()
        {
            Fixture = new Fixture().Customize(new AutoMoqCustomization());
            Fixture.Behaviors.Add(new OmitOnRecursionBehavior());

            SchoolGradContext = new SchoolGradContext(new DbContextOptionsBuilder<SchoolGradContext>().UseInMemoryDatabase(Guid.NewGuid().ToString()).Options);

            Fixture.Inject(SchoolGradContext);

            SubjectService = Fixture.Create<SubjectService>();
            
            SchoolGradContext = Fixture.Create<SchoolGradContext>();
        }


        protected void RegisterModels()
        {
            Fixture.Register(() => Fixture.Build<Subject>()
            .OmitAutoProperties()
            .With(s => s.Id)
            .With(s => s.Name)
            .With(s => s.ShortName)
            .With(s => s.Grads)
            .Create());

            Fixture.Register(() => Fixture.Build<Grad>()
            .OmitAutoProperties()
            .With(g => g.Id)
            .With(g => g.Name)
            .With(g => g.Subject)
            .With(g => g.GradValueDecimal)
            .With(g => g.GradValuePoints)
            .With(g => g.Date)
            .Create());

            Fixture.Register(() => Fixture.Build<SchoolInformations>()
            .OmitAutoProperties()
            .With(s => s.Id)
            .With(s => s.Name)
            .Create());
        }
    }
}

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
        protected readonly WebAppContext WebAppContext;
        protected readonly SubjectService SubjectService;

        protected Infrastructure()
        {
            Fixture = new Fixture().Customize(new AutoMoqCustomization());
            Fixture.Behaviors.Add(new OmitOnRecursionBehavior());

            WebAppContext = new WebAppContext(new DbContextOptionsBuilder<WebAppContext>().UseInMemoryDatabase(Guid.NewGuid().ToString()).Options);

            Fixture.Inject(WebAppContext);

            WebAppContext = Fixture.Create<WebAppContext>();
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
            .With(g => g.Points)
            .With(g => g.Date)
            .Create());

            Fixture.Register(() => Fixture.Build<SchoolYear>()
            .OmitAutoProperties()
            .With(sy => sy.Id)
            .With(sy => sy.Name)
            .With(sy => sy.Subjects)
            .With(sy => sy.School)
            .Create());

            Fixture.Register(() => Fixture.Build<School>()
            .OmitAutoProperties()
            .With(s => s.Id)
            .With(s => s.Name)
            .With(s => s.FedState)
            .With(s => s.Holidays)
            .Create());

            Fixture.Register(() => Fixture.Build<Holiday>()
            .OmitAutoProperties()
            .With(h => h.Id)
            .With(h => h.Name)
            .With(h => h.StartDate)
            .With(h => h.EndDate)
            .Create());

        }
    
    }
}

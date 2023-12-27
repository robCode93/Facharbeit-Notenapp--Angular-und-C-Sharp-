using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoFixture;
using web_api.Models.DetailModels;
using web_api.Models;
using Xunit;
using System.Diagnostics;
using FluentAssertions;

namespace NotenAppApiTest.SubjectServiceTests
{
    public sealed class GetAllSubjects : Infrastructure
    {

        [Fact]
        public void GetListOfAllSubjects()
        {
            // Arrange
            RegisterModels();

            for(int i = 0; i < 3; i++)
            {
                var subject = Fixture.Build<Subject>().Create();
                SchoolGradContext.Subjects.Add(subject);
            }

            SchoolGradContext.SaveChanges();
            // Act
            var allSubjects = Call();

            // Assert
            allSubjects.Should().NotBeNull();
            allSubjects.Should().HaveCount(3);
            SchoolGradContext.Subjects.Should().HaveCount(3);
        }

        [Fact] 
        public void ReturnsEmptyListIfNoSubjectFound()
        {
            // Arrange 
            RegisterModels();

            // Act
            var result = Call();

            // Assert
            result.Should().BeEmpty();
            SchoolGradContext.Subjects.Should().HaveCount(0);
        }



        [DebuggerStepThrough]
        public List<SubjectDetails> Call() => SubjectService.GetAllSubjects();
    }
}

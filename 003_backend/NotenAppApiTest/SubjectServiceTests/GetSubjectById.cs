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
    public sealed class GetSubjectById : Infrastructure
    {
        private Guid subjectId;

        public GetSubjectById()
        {
            subjectId = Fixture.Create<Guid>();
        }

        [Fact]
        public void ReturnsTheSubject()
        {
            // Arrange
            RegisterModels();

            var subject = Fixture.Build<Subject>()
                .With(s => s.Id, subjectId)
                .Create();

            SchoolGradContext.Subjects.Add(subject);
            SchoolGradContext.SaveChanges();

            // Act
            var result = Call();

            // Assert
            result.Should().NotBeNull();

            foreach(var grad in result.Grads)
            {
                SchoolGradContext.Grads.Any(g => g.Id == grad.Id);
            }

            SchoolGradContext.Subjects.Any(s => s.Id == subject.Id);
            result.Should().Be(subject);
        }

        [Fact]
        public void ReturnsNullIfSubjectNotFound()
        {
            // Arrange
            RegisterModels();

            // Act
            var result = Call();

            // Assert
            result.Should().BeNull();
            SchoolGradContext.Subjects.Should().HaveCount(0);
        }

        [Fact]
        public void ReturnsSubjectWithoutGrads()
        {
            // Arrange
            RegisterModels();

            var subject = Fixture.Build<Subject>()
                .With(s => s.Id, subjectId)
                .Without(s => s.Grads)
                .Create();

            SchoolGradContext.Subjects.Add(subject);
            SchoolGradContext.SaveChanges();

            // Act
            var result = Call();

            // Assert
            result.Should().NotBeNull();
            result.Id.Should().Be(subject.Id);
            result.Grads.Should().BeNull();
            SchoolGradContext.Subjects.Should().HaveCount(1);
            SchoolGradContext.Subjects.First(s => s.Id == result.Id);
            SchoolGradContext.Subjects.First(s => s.Id == subject.Id);
        }



        [DebuggerStepThrough]
        public SubjectDetails? Call() => SubjectService.GetSubjectById(subjectId);

    }
}


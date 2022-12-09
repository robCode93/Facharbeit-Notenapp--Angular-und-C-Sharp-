using System;
using AutoFixture;
using Xunit;
using web_api.Models;
using web_api.CRUDModels;
using web_api.Services;
using NotenAppApiTest.SubjectServiceTests;
using System.Diagnostics;

namespace NotenAppApiTest.SubjectServiceTests
{
    public class AddGradToSubject : Infrastructure
    {
        private Guid subjectId;
        private Guid gradId;

        public AddGradToSubject()
        {
            subjectId = Fixture.Create<Guid>();
            gradId = Fixture.Create<Guid>();
        }

        [DebuggerStepThrough]
        public ResponseModel Call() => SubjectService.AddGradToSubject(subjectId, gradId);
    }
}


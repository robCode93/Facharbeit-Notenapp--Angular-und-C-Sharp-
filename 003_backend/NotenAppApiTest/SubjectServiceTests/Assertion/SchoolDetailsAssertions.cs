using FluentAssertions;
using FluentAssertions.Primitives;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using web_api.Models;
using web_api.Models.DetailModels;

namespace NotenAppApiTest.SubjectServiceTests.Assertion
{
    public sealed class SchoolDetailsAssertions : ReferenceTypeAssertions<SchoolDetails, SchoolDetailsAssertions>
    {
        public SchoolDetailsAssertions(SchoolDetails subject) : base(subject) { }

        protected override string Identifier => "schooldetails";

        public AndConstraint<SchoolDetails> Be(School school)
        {
            Subject.Id.Should().Be(school!.Id);
            Subject.Name.Should().Be(school!.Name);
            Subject.FedState.Should().Be(school!.FedState);

            return new AndConstraint<SchoolDetails>(Subject);
        }

    }
}

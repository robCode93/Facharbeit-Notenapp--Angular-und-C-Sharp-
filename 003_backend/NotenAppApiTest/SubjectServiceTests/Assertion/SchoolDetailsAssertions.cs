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

        public AndConstraint<SchoolDetails> Be(SchoolInformations schoolInformations)
        {
            Subject.Id.Should().Be(schoolInformations!.Id);
            Subject.Name.Should().Be(schoolInformations!.Name);
            Subject.FedState.Should().Be(schoolInformations!.FedState);

            return new AndConstraint<SchoolDetails>(Subject);
        }

    }
}

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
    public sealed class SchoolYearDetailsAssertions : ReferenceTypeAssertions<SchoolYearDetails, SchoolYearDetailsAssertions>
    {
        public SchoolYearDetailsAssertions(SchoolYearDetails subject) : base(subject) { }

        protected override string Identifier => "schoolyeardetails";

        public AndConstraint<SchoolYearDetails> Be(SchoolYear schoolYear)
        {
            Subject.Id.Should().Be(schoolYear!.Id);
            Subject.Name.Should().Be(schoolYear!.Name);
            Subject.School.Should().Be(schoolYear!.School);
            

            return new AndConstraint<SchoolYearDetails>(Subject);
        }

    }
}

using FluentAssertions.Primitives;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using web_api.Models.DetailModels;
using System.Threading.Tasks;
using FluentAssertions;
using web_api.Models;

namespace NotenAppApiTest.SubjectServiceTests.Assertion
{
    public sealed class SubjectDetailsAssertions : ReferenceTypeAssertions<SubjectDetails, SubjectDetailsAssertions>
    {
        public SubjectDetailsAssertions(SubjectDetails subject) : base(subject) { }

        protected override string Identifier => "subjectdetails";

        public AndConstraint<SubjectDetails> Be(Subject subject)
        {
            Subject.Id.Should().Be(subject!.Id);
            Subject.Name.Should().Be(subject!.Name);
            Subject.ShortName.Should().Be(subject!.ShortName);

            return new AndConstraint<SubjectDetails>(Subject);
        }

    }
}

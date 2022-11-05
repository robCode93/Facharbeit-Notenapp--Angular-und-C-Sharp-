using FluentAssertions;
using FluentAssertions.Primitives;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using web_api.Models.DetailModels;
using web_api.Models;

namespace NotenAppApiTest.SubjectServiceTests.Assertion
{
    public sealed class GradDetailsAssertions : ReferenceTypeAssertions<GradDetails, GradDetailsAssertions>
    {
        public GradDetailsAssertions(GradDetails subject) : base(subject) { }

        protected override string Identifier => "graddetails";

        public AndConstraint<GradDetails> Be(Grad grad)
        {
            Subject.Id.Should().Be(grad!.Id);
            Subject.Name.Should().Be(grad!.Name);
            Subject.Points.Should().Be(grad!.Points);
            Subject.Date.Should().Be(grad!.Date);

            return new AndConstraint<GradDetails>(Subject);
        }

    }
}

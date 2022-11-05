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
    public sealed class HolidayDetailsAssertions : ReferenceTypeAssertions<HolidayDetails, HolidayDetailsAssertions>
    {
        public HolidayDetailsAssertions(HolidayDetails subject) : base(subject) { }

        protected override string Identifier => "holidaydetails";

        public AndConstraint<HolidayDetails> Be(Holiday holiday)
        {
            Subject.Id.Should().Be(holiday!.Id);
            Subject.Name.Should().Be(holiday!.Name);
            Subject.StartDate.Should().Be(holiday!.StartDate);
            Subject.EndDate.Should().Be(holiday!.EndDate);

            return new AndConstraint<HolidayDetails>(Subject);
        }

    }
}

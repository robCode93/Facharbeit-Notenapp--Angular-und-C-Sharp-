using web_api.CRUDModels;
using web_api.Models;
using web_api.Models.DetailModels;

namespace web_api.Services.ServiceInterfaces
{
    public interface ISchoolService
    {
        List<SchoolInformations> GetInformationsForAllSchools();
        SchoolInformations GetSchoolInformations(Guid schoolId);

        ResponseModel AddNewSchoolInformations(CreateAndUpdateSchoolModel createAndUpdateModel);
        ResponseModel UpdateSchoolInformations(Guid schoolId, CreateAndUpdateSchoolModel updateModel);

        ResponseModel DeleteSchoolInformations(Guid schoolId);

    }
}

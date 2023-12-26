using web_api.Models;
using web_api.Models.DetailModels;
using web_api.CRUDModels;

namespace web_api.Services.ServiceInterfaces
{
    public interface ISubjectService
    {
        SubjectDetails GetSubjectById(Guid subjectId);
        List<SubjectDetails> GetAllSubjects();
        List<SubjectDetails> GetAllActiveSubjects();
            
        ResponseModel CreateSubject(CreateAndUpdateSubjectModel createAndUpdateModel);
        ResponseModel UpdateSubject(Guid subjectId, CreateAndUpdateSubjectModel updateModel);

        ResponseModel DeleteSubject(Guid subjectId);
    }
}

using web_api.Models;
using web_api.Models.DetailModels;
using web_api.CRUDModels;

namespace web_api.Services.ServiceInterfaces
{
    public interface ISubjectService
    {
        SubjectDetails GetSubjectById(Guid subjectId);
        List<SubjectDetails> GetAllSubjects();
        List<GradDetails> GetGradsOfSubject(Guid subjectId);
            
        ResponseModel CreateSubject(CreateSubjectModel createModel);
        ResponseModel UpdateSubject(Guid subjectId, UpdateSubjectModel updateModel);

        ResponseModel AddGradToSubject(Guid subjectId, Guid gradId);

        ResponseModel DeleteSubject(Guid subjectId);
    }
}

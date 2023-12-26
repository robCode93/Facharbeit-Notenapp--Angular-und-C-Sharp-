using web_api.CRUDModels;
using web_api.Models;
using web_api.Models.DetailModels;

namespace web_api.Services.ServiceInterfaces
{
    public interface IGradService
    {
        List<GradDetails> GetAllGrads();
        GradDetails GetGradById(Guid gradId);

        ResponseModel CreateGrad(CreateAndUpdateGradModel createAndUpdateModel);
        ResponseModel UpdateGrad(Guid gradId, CreateAndUpdateGradModel updateModel);

        ResponseModel DeleteGrad(Guid gradId);
    }
}

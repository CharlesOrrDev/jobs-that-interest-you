"use client"

interface Iprops
{
    jobNameText: string;
    jobDescriptionText: string;
    jobRequirementsText: string;
    skillsNeededText: string;
    hyperlinkText: string;
    whyWorkThereText: string;
    whatToAchieveText: string;
}

const Card = ({jobNameText, jobDescriptionText, jobRequirementsText, skillsNeededText, hyperlinkText, whyWorkThereText, whatToAchieveText}: Iprops) =>
{
  return (
    <>
      <div className="grid gap-[10px] bg-blue-950 inset-shadow-blue-400 inset-shadow-[0px_0px_10px_rgba(0,0,0,0.6)] items-center w-[700px] h-fit p-[20px] rounded-[10px] text-white">

        <div className="outline-[2px] outline-black/20 rounded-[5px] px-[15px] py-[10px] shadow-[0px_0px_10px_rgba(0,0,0,0.6)] w-[660px]">
          <h1 className="pb-[5px]">Job Name</h1>
          <p className="inset-shadow-[0px_0px_10px_rgba(0,0,0,0.6)] bg-blue-900/40 px-[10px] py-[15px] rounded-[5px] overflow-y-auto">{jobNameText}</p>
        </div>

        <div className="outline-[2px] outline-black/20 rounded-[5px] px-[15px] py-[10px] shadow-[0px_0px_10px_rgba(0,0,0,0.6)] w-[660px]">
          <h1 className="pb-[5px]">Description</h1>
          <p className="inset-shadow-[0px_0px_10px_rgba(0,0,0,0.6)] bg-blue-900/40 px-[10px] py-[15px] rounded-[5px] overflow-y-auto h-[198px]">{jobDescriptionText}</p>
        </div>

        <div className="outline-[2px] outline-black/20 rounded-[5px] px-[15px] py-[10px] shadow-[0px_0px_10px_rgba(0,0,0,0.6)] w-[660px]">
          <h1 className="pb-[5px]">Requirements</h1>
          <p className="inset-shadow-[0px_0px_10px_rgba(0,0,0,0.6)] bg-blue-900/40 px-[10px] py-[15px] rounded-[5px] overflow-y-auto h-[126px]">{jobRequirementsText}</p>
        </div>

        <div className="outline-[2px] outline-black/20 rounded-[5px] px-[15px] py-[10px] shadow-[0px_0px_10px_rgba(0,0,0,0.6)] w-[660px]">
          <h1 className="pb-[5px]">Skills Needed</h1>
          <p className="inset-shadow-[0px_0px_10px_rgba(0,0,0,0.6)] bg-blue-900/40 px-[10px] py-[15px] rounded-[5px] overflow-y-auto h-[78px]">{skillsNeededText}</p>
        </div>

        <div className="outline-[2px] outline-black/20 rounded-[5px] px-[15px] py-[10px] shadow-[0px_0px_10px_rgba(0,0,0,0.6)] w-[660px]">
          <h1 className="pb-[5px]">Why I Want To Work There</h1>
          <p className="inset-shadow-[0px_0px_10px_rgba(0,0,0,0.6)] bg-blue-900/40 px-[10px] py-[15px] rounded-[5px] overflow-y-auto h-[78px]">{whyWorkThereText}</p>
        </div>

        <div className="outline-[2px] outline-black/20 rounded-[5px] px-[15px] py-[10px] shadow-[0px_0px_10px_rgba(0,0,0,0.6)] w-[660px]">
          <h1 className="pb-[5px]">What Id Like To Achieve</h1>
          <p className="inset-shadow-[0px_0px_10px_rgba(0,0,0,0.6)] bg-blue-900/40 px-[10px] py-[15px] rounded-[5px] overflow-y-auto h-[102px]">{whatToAchieveText}</p>
        </div>

        <div className="outline-[2px] outline-black/20 rounded-[5px] px-[15px] py-[10px] shadow-[0px_0px_10px_rgba(0,0,0,0.6)] w-[660px]">
          <h1 className="pb-[5px]">Hyperlink</h1>
          <p className="inset-shadow-[0px_0px_10px_rgba(0,0,0,0.6)] bg-blue-900/40 px-[10px] py-[15px] rounded-[5px] overflow-y-auto h-[102px]">{hyperlinkText}</p>
        </div>

      </div>
    </>
  )
}

export default Card
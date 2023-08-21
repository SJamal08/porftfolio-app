import React from 'react'

const Skills = ({skills}) => {
  return (
    <div name='skills' className='w-full bg-[#0a192f] text-gray-300 '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Compétences</p>
                <p className='py-4'> les technologies avec lesquelles j'ai travaillé</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                {
                    skills.map( skill => (
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={skill.img} alt='' />
                    <p className='my-4'>{skill.name}</p>
                </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Skills